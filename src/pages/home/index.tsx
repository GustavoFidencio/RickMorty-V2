
import { SafeArea, List } from './styles';
import React, { useEffect, useState } from "react";

import { Character } from './types';
import { StorageHome } from './storage';
import { Header, ItemList } from './commons';

let lastPage = 0;

export const Home = ({ }) => {

    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        _getCharacters();
    }, []);

    const _getCharacters = () => {

        StorageHome.getCharacteres(page)
            .then(({ characters, pages }) => {
                lastPage = pages;
                setCharacters(characters);
            })
            .catch(err => console.log(err))
            .finally(() => console.log('end'))
    };

    return (
        <SafeArea>
            <Header />
            <List
                data={characters}
                onEndReachedThreshold={.8}
                keyExtractor={({ id }: { id: number }) => String(id)}
                renderItem={({ item }) =>
                    <ItemList
                        character={item}
                    />
                }
            // ListFooterComponent={() => <FooterComponent load={loadMore} />}
            />
        </SafeArea>
    )
}