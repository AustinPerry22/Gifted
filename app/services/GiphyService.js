import { giphyApi } from "./AxiosService.js";
import { Gift } from "../models/Gift.js";
import { AppState } from "../AppState.js";

class GiphyService {
    async search(query) {
        const res = await giphyApi.get('search', {
            params: {
                q: query
            }
        });
        // Handle the response
        let mappedSearchGifts = res.data.data.map(dataObj => new Gift(dataObj))
        AppState.searchGifts = mappedSearchGifts
        console.log(AppState.searchGifts)
        AppState.emit('searchGifts')
    }
}

export const giphyService = new GiphyService()