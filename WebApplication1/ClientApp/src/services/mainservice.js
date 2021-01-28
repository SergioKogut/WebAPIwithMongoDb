import axios from 'axios';
import { serverUrl } from '../config';

export default class MainService {

    //-----------------OPERATION    PRODUCTS---------------------------
    static getProducts() {
        return axios.get(`${serverUrl}api/products`);
    }

}