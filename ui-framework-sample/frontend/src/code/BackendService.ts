import axios from 'axios';
import { ProjectDto } from './models/ProjectDto';
import { ProductDto } from './models/ProductDto';

export class BackendService {

    private static _backendApiUrl: string = 'https://localhost:5001';

    public static async loadProducts(): Promise<ProductDto[]> {
        let products = new Array<ProductDto>();
        let url = `${this._backendApiUrl}/api/products/getall`;
        let response = await this.loadData(new Array<string>(), url);
        response.forEach(x => {
            products.push(new ProductDto(x));
        })

        return products;
    }

    public static async loadProductConfig(id: string): Promise<Object> {
        let url = `${this._backendApiUrl}/api/products/${id}`;
        let response = await this.loadData({}, url);

        return response;
    }

    public static async loadProjects(userId: string): Promise<ProjectDto[]> {
        let url = `${this._backendApiUrl}/api/users/${userId}/projects/getall`;
        let projects = await this.loadData(new Array<ProjectDto>(), url);

        return projects;
    }

    public static async saveProject(dto: ProjectDto): Promise<void> {
        let url = `${this._backendApiUrl}/api/projects/create`;
        await this.sendData(dto, url);
    }

    public static async updateProject(dto: ProjectDto): Promise<void> {
        let url = `${this._backendApiUrl}/api/projects/update`;
        await this.updateData(dto, url);
    }

    public static async getToken(userId: string): Promise<string> {
        let url = `${this._backendApiUrl}/api/users/${userId}/tokens/generate`;
        let token = await this.loadData('', url);

        return token;
    }

    private static async loadData<T>(defaultVaue: T, url: string): Promise<T> {
        let result: T = defaultVaue;
        try {
            let response = await axios.get(url);
            if (response.status == 200) {
                result = response.data;
            } else {
                console.error(response.data);
            }
        } catch(error) {
            console.error(error);
        } finally {
            return result;
        }
    }

    private static async sendData(data: any, url: string): Promise<any> {
        let result: any = {};
        try {
            let response = await axios.post(url, data);
            if (response.status == 200) {
                result = response.data;
            } else {
                console.error(response.data);
            }
        } catch(error) {
            console.error(error);
        } finally {
            return result;
        }
    }

    private static async updateData(data: any, url: string): Promise<any> {
        let result: any = {};
        try {
            let response = await axios.put(url, data);
            if (response.status == 200) {
                result = response.data;
            } else {
                console.error(response.data);
            }
        } catch(error) {
            console.error(error);
        } finally {
            return result;
        }
    }
}