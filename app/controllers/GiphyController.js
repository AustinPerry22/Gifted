import { Pop } from "../utils/Pop.js"
import { getFormData } from "../utils/FormHandler.js"
import { giphyService } from "../services/GiphyService.js"
import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

function _drawSearchGifts() {
    console.log("drawing search gifts")
    let content = ''
    let searchGifts = AppState.searchGifts
    console.log(AppState.searchGifts)
    searchGifts.forEach(gift => content += gift.searchTemplate)
    setHTML('searchGifts', content)
}

export class GiphyController {
    constructor() {
        AppState.on('searchGifts', _drawSearchGifts)
    }
    async search() {
        try {
            window.event.preventDefault()
            let formEvent = window.event.target
            let formData = getFormData(formEvent)
            console.log(formData)
            formEvent.reset()
            await giphyService.search(formData.search)
        } catch (error) {
            Pop.error(error)
        } // Handle the response
    }
}