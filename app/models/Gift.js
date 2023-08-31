export class Gift {
    constructor(data) {
        this.id = data.id || ''
        this.tag = data.tag
        this.url = data.url
        this.embedUrl = data.images.original.url
        this.opened = data.opened || true
    }

    get listTemplate() {
        return `<div class="col-3 m-2 card elevation-5 p-3 selectable" onclick="app.GiftsController.openGift('${this.id}')">
        <img
          src="${this.url}"
          alt="" class="img-fluid">
        <p>${this.tag}</p>
      </div>`
    }

    get searchTemplate() {
        return `<div class="col-3 m-2 card elevation-5 p-3 selectable text-dark">
        <img src="${this.embedUrl}" alt=""/>
      </div>`
    }
}