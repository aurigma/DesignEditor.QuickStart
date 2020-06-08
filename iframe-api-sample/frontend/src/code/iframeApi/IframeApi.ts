declare namespace CustomersCanvas {
    export namespace IframeApi {
        export namespace Editor {
            export namespace ObjectModel {
                export interface IProductDefinition {
                    name?: string;
                    surfaces: (string | ISurfaceFromState)[];
                    defaultSafetyLines?: ISafetyLine[];
                }
                export interface IBaseSurface {
                    name?: string;
                    foldingLines?: IFoldingLine[];
                    spines?: ISpine[];
                }
                export interface ISurfaceFromState extends IBaseSurface {
                    stateId: string;
                    surface?: number;
                }
                export interface IFoldingLine {
                    isVertical: boolean;
                    margin: Unit;
                    bleed: number;
                }
                export interface ISpine extends IFoldingLine {
                    width: number;
                    fillColor: string;
                }
                export interface ISafetyLine {
                    name?: string;
                    margin: number;
                    color?: string;
                    altColor?: string;
                    stepPx?: number;
                    widthPx?: number;
                }
            }
            export interface IProofResult {
                stateId: string;
                proofImageUrls: Array<string>;
            }
            export interface IFinishDesignResult {
                proofImageUrls: Array<string>;
                hiResOutputUrls: Array<string>;
                returnToEditUrl: string;
                stateId: string;
                userChanges: IUserChanges;
            }
            export interface IUserChanges {
                texts: {
                    name: string;
                    usersValue: string;
                }[];
                textPlaceholders: {
                    name: string;
                    usersValue: string;
                }[];
            }
            export interface IConfiguration {
                appUrl?: string;
                tokenId?: string;
                userId?: string;
            }
        }
        export function loadEditor(editorFrame: HTMLIFrameElement, product: Editor.ObjectModel.IProductDefinition, config?: Editor.IConfiguration, onFirstLoad?: () => void): Promise<Editor>;
        export class Editor {
            constructor();
            public getProofImages(options?: {
                maxWidth?: number;
                maxHeight?: number;
            }): Promise<Editor.IProofResult>;
            public finishProductDesign(options?: {
                proofMaxWidth?: number;
                proofMaxHeight?: number;
            }): Promise<Editor.IFinishDesignResult>;
        }
        export class Unit {
        }
    }
}
