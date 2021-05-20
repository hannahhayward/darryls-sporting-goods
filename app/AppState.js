import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import {Item} from "./Models/Item.js"

class AppState extends EventEmitter {
/**@type {Items[]} */
items = [
  new Item("https://image.sportsmansguide.com/adimgs/l/7/706763_ts.jpg", "Wall Tent", 300, "this is a real nice tent.... seriously", 5),
  new Item("https://images.uline.com/is/image//content/dam/images/H/H8500/H-8193.jpg?$Mobile_SI$&iccEmbed=1&icc=AdobeRGB", "Cooler", 275, "This is a real expensive cooler .... seriously", 2)
]
Funds = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
