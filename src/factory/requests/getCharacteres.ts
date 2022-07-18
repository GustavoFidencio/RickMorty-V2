import Routes from '../routes';
import { Request } from './request';

const { characteres } = Routes;

export class GetCharacteres extends Request {

    constructor(id: number) {
        const url = `${characteres}${id}`;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        super(url, "GET", headers, null);
    }

}