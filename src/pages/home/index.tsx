
import React, { useEffect, useState } from "react";
import { SafeArea, List, Load, TextError, s } from './styles';

import { Character } from './types';
import { StorageHome } from './storage';
import { Header, ItemList, FooterList } from './commons';
import { useGlobal } from "@hooks/globalApp";

let lastPage = 0;
let currentPage = 1;

export const Home = ({ }) => {

    const { backgroundColor } = useGlobal();
    const [isLoad, setLoad] = useState(true);
    const [loadMore, setLoadMore] = useState(true);
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        _getCharacters();
    }, []);

    const _disableLoads = () => {
        setLoad(false);
        setLoadMore(false);
    }

    const _getCharacters = () => {
        StorageHome.getCharacteres(currentPage)
            .then(({ result, pages }) => {
                currentPage++;
                lastPage = pages;
                setCharacters([...characters, ...result]);
            })
            .catch(err => console.log("modal err"))
            .finally(_disableLoads.bind(this));
    };

    const _getMoreCharacters = () => {
        if (
            loadMore ||
            !characters.length ||
            currentPage == lastPage
        ) return;
        setLoadMore(true);
        _getCharacters();
    }

    return (
        <SafeArea style={{ backgroundColor }} >
            <Header />
            {
                isLoad ?
                    <Load size="large" />
                    :
                    <List
                        data={characters}
                        contentContainerStyle={s.list}
                        onEndReachedThreshold={.8}
                        onEndReached={_getMoreCharacters}
                        keyExtractor={({ id }: { id: number }) => String(id)}
                        renderItem={({ item }) => <ItemList character={item} />}
                        ListEmptyComponent={() => <TextError> No characters found </TextError>}
                        ListFooterComponent={() => <FooterList finish={currentPage == lastPage} />}
                    />
            }
        </SafeArea>
    )
}