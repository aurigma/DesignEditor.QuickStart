import { BackendService } from './BackendService';

export class UiFrameworkInitializer {
    public readonly _uiFrameworkBaseUrl = "https://localhost:5001/ui-framework/4.8.0/";
    private readonly _ccBaseUrl = "https://localhost/5.26.0/";
    private readonly _driverUrl = this._uiFrameworkBaseUrl + "drivers/default-driver.js";
    private readonly _editorUrl = this._uiFrameworkBaseUrl + "editor.js";

    private _moduleLoader: any = {};
    private _driver: any = {};
    private _editor: any = {};

    private _settings: Object;
    private _product: Object;

    constructor(moduleLoader: any) {
        this._moduleLoader = moduleLoader;

        this._settings = {
            customersCanvasBaseUrl: this._ccBaseUrl
        };

        this._product = {
            id: 0,
            sku: "PRODUCT-001",
            name: "My Product",
            description: "This is a test product.",
            options: [],
            price: 1,
            attributes: []
        };
    }

    public async init() {
        let driverModule = await this._moduleLoader.dynamicImport("ecommerceDriver", this._driverUrl);
        this._driver = driverModule.ecommerceDriver;
        let editorModule = await this._moduleLoader.dynamicImportDefault("editor", this._editorUrl);
        this._editor = editorModule.editor;
    }

    public async loadEditor(parentDivId: string, configId: string, productQuantity: Number, existingProduct: Object | null, userInfo: UserInfo): Promise<any> {
        let config = await BackendService.loadProductConfig(configId);

        let ecommerce = await this._driver.init(this._product, this._editor, config, this._settings, existingProduct, productQuantity, userInfo);
        ecommerce.products.current.renderEditor(document.getElementById(parentDivId));
        return ecommerce;
    }
}

interface UserInfo {
    id: string;
    tokenId: string;
}