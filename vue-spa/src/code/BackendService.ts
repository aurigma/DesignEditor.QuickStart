import { DesignDto } from './models/DesignDto';
import axios from 'axios'

export class BackendService {

    private static _backendApiUrl: string = 'http://localhost:5000/';

    public static async getToken(userId: string): Promise<string> {
        let url = `${this._backendApiUrl}api/users/${userId}/tokens/generate`;
        let token = await this.loadData('', url);

        return token;
    }

    public static async loadDesigns(): Promise<DesignDto[]> {
        let url = `${this._backendApiUrl}api/designs/getall`;
        let designs = await this.loadData(new Array<DesignDto>(), url);

        return designs;
    }

    public static async loadStates(userId: string): Promise<string[]> {
        let url = `${this._backendApiUrl}api/users/${userId}/states/getall`;
        let states = await this.loadData(Array<string>(), url);

        return states;
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
        } catch (error) {
            console.error(error);
        } finally {
            return result;
        }
    }
}