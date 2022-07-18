import { Executor } from '@factory/executor';
import { GetCharacteres } from '@factory/requests/getCharacteres';

import { Character } from '../types';

type CharacterAndPages = {
    pages: number
    result: [Character]
}

export class StorageHome {

    static getCharacteres(id: number): Promise<CharacterAndPages> {
        return new Promise((resolve, reject) => {
            Executor.run(new GetCharacteres(id))
                .then(({ data: { results, info: { pages } } }) => {
                    const result: [Character] = results;
                    resolve({ result, pages });
                })
                .catch(({ response }) => {
                    console.log(response.status);
                    reject(response.status);
                });
        })
    }

}