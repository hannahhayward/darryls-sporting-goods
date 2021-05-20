import { ProxyState } from "../AppState.js";
import {Item} from "./models"
export class ItemsController {
    constructor() {
        ProxyState.on('items', this.drawItems)
        this.drawItems()
    }
    drawItems() {
        let template = ''
        ProxyState.items.forEach(item => {
            template += /*html */`
            <div class="col-sm-4 listing my-3 d-flex">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${item.img}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${item.name} <br>$${item.price}</h5>
                        <span class="card-text"><b>Description: </b> ${item.description} <br> In Stock: ${item.inStock}</span>
                        <br>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
            `
        })
        document.getElementById('items').innerHTML = template
    }
}