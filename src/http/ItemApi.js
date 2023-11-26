import {$authHost, $host} from "./index"
import item from "../pages/Item";

export const createItem = async (item) => {
    const {data} = await $authHost.post('/api/item', item)
    return data
}

export const fetchItem = async () => {
    const {data} = await $host.get('/api/item')
    return data
}
export const fetchOneItem = async (id) => {
    const {data} = await $host.get('/api/item/'+id)
    return data
}