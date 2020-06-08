import "./iframeApi/IframeApi.ts";
export class IFrameApiService {

    public static async loadEditor(iframe: HTMLIFrameElement, file: string, mode: string, userId: string, token?: string): Promise<CustomersCanvas.IframeApi.Editor> {
        if (mode == "designs") {
            return await this.loadEditorForDesign(iframe, file, userId, token);
        } else {
            return await this.loadEditorForState(iframe, file, userId, token);
        }
    }

    public static async getPreviewImages(editor: CustomersCanvas.IframeApi.Editor, maxWidth?: number, maxHeight?: number): Promise<Array<string>> {
        let options = {
            maxWidth: maxWidth,
            maxHeight: maxHeight
        }
        let result = await editor.getProofImages(options);

        return result.proofImageUrls;
    }

    public static async finishDesign(editor: CustomersCanvas.IframeApi.Editor, maxWidth?: number, maxHeight?: number, stateId?: string): Promise<Array<string>> {
        let options = {
            proofMaxWidth: maxWidth,
            proofMaxHeight: maxHeight,
            stateId: stateId
        }
        let result = await editor.finishProductDesign(options);

        return result.hiResOutputUrls;
    }

    private static async loadEditorForDesign(iframe: HTMLIFrameElement, design: string, userId: string, token?: string): Promise<CustomersCanvas.IframeApi.Editor> {
        let productDefinition: CustomersCanvas.IframeApi.Editor.ObjectModel.IProductDefinition = {
            surfaces: [
                design
            ]
        };
        let config = {
            tokenId: token,
            userId: userId
        };

        let editor = await CustomersCanvas.IframeApi.loadEditor(iframe, productDefinition, config);
        return editor;
    }

    private static async loadEditorForState(iframe: HTMLIFrameElement, state: string, userId: string, token?: string): Promise<CustomersCanvas.IframeApi.Editor> {
        let productDefinition: CustomersCanvas.IframeApi.Editor.ObjectModel.IProductDefinition = {
            surfaces: [{
                stateId: state
            }]
        };
        let config = {
            tokenId: token,
            userId: userId
        };

        let editor = await CustomersCanvas.IframeApi.loadEditor(iframe, productDefinition, config);
        return editor;
    }
}