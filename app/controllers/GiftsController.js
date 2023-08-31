import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js"

function _drawGifts() {
    console.log("drawing gifts")
    let content = ''
    let gifts = AppState.gifts
    gifts.forEach(gift => content += gift.listTemplate)
    setHTML('giftsRow', content)
}
export class GiftsController {
    constructor() {
        this.getGifts()
        AppState.on('gifts', _drawGifts)
    }

    async createGift() {
        try {
            window.event.preventDefault()
            let formEvent = window.event.target
            let formData = getFormData(formEvent)
            console.log(formData)
            formEvent.reset()
            await giftsService.createGift(formData)
        } catch (error) {
            Pop.error(error)
        }
    }
    async getGifts() {
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.error(error)
        }
    }

    async openGift(giftId) {
        try {
            giftsService.openGift(giftId)
        } catch (error) {
            Pop.error(error)
        }
    }
}