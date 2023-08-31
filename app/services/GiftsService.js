import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js";

class GiftsService {
    async createGift(formData) {
        const res = await api.post('api/gifts', formData)
        const newGift = new Gift(res.data)
        AppState.gifts.push(newGift)
        AppState.emit('gifts')
    }
    async getGifts() {
        const res = await api.get('/api/gifts')
        console.log(res.data)
        let mappedGifts = res.data.map(dataObj => new Gift(dataObj))
        AppState.gifts = mappedGifts
    }

    async openGift(giftId) {
        let foundGift = AppState.gifts.find(gift => gift.id == giftId)
        foundGift.opened = true
        const res = await api.put(`/api/gifts/${giftId}`, foundGift)
        console.log('opening Gift', foundGift, AppState.gifts)
        AppState.emit('gifts')
    }
}

export const giftsService = new GiftsService();