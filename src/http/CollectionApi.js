import {$authHost, $host} from "./index"
import axios from "axios";

export const createTheme = async (theme) => {
    const {data} = await $authHost.post('/api/theme', theme)
    return data
}

export const fetchTheme = async () => {
    const {data} = await $host.get('/api/theme')
    return data
}

export const createCollection = async (collection) => {
    const {data} = await $authHost.post('/api/collection', collection)
    return data
}

export const fetchDeleteCollection = async (themeId) => {
    const { data } = await $host.delete(`/api/collection`, {
        params: {
            themeId: themeId, // Передаем выбранный идентификатор темы как параметр запроса
        },
    });
    console.log({ data });
    return data;
};

export const fetchCollection = async (id = '') => {
    const {data} = await $host.get('/api/collection/'+id)
    return data
}
export const fetchCollectionByTheme = async (theme_id= '') => {
    const {data} = await $host.get('/api/collection/theme/'+theme_id)
    return data
}


