import {$authHost} from "./index";

export const getBasketDevice = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}

export const createBasketDevice = async (basketId, deviceId) => {
    const {data} = await $authHost.post('api/basket', {basketId, deviceId})
    return data
}

export const deleteBasketDevice = async (id) => {
    const {data} = await $authHost.delete('api/basket', { data: { id } })
    return data
}
