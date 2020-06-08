export class ProductDto {
    constructor(id: string = '', preview: string = '../assets/logo_cc.svg') {
        this.id = id;
        this.preview = preview;
    }

    public id: string;

    public preview: string;
}