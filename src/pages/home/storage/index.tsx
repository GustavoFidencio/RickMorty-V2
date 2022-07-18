import { Executor } from '@factory/executor';
import { GetCharacteres } from '@factory/requests/getCharacteres';

import { Character } from '../types';

type CharacterAndPages = {
    pages: number
    characters: [Character]
}

export class StorageHome {

    static getCharacteres(id: number): Promise<CharacterAndPages> {
        return new Promise((resolve, reject) => {
            Executor.run(new GetCharacteres(id))
                .then(({ data: { results, info: { pages } } }) => {
                    const characters: [Character] = results;
                    resolve({ characters, pages });
                })
                .catch(({ response }) => {
                    console.log(response.status);
                    reject(response.status);
                });
        })
    }

}