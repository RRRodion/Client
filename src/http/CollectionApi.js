import {$authHost, $host} from "./index"

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

export const fetchCollection = async () => {
    const {data} = await $host.get('/api/collection')
    console.log({data})
    return data
}

export const fetchOneCollection = async (id) => {
    const {data} = await $host.get('/api/collection/'+id)
    return data
}