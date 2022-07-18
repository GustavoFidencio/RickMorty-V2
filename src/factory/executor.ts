import axios from 'axios';

type RequestProps = {
    url: string
    header: any
    method: string
    params?: Object
}

export class Executor {

    static run({ method, header, url, params }: RequestProps) {
        return axios({
            url,
            method,
            data: params,
            headers: header,
        });
    }
}