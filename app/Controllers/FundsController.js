import {ProxyState} from "../AppState.js"
import {FundService} from "../Services/FundsService.js"
export class FundsController{
  constructor(){
    ProxyState.on('Funds', this.drawFunds)
    this.drawFunds()
  }

  drawFunds(){
let template = document.getElementById('funds')
template.innerHTML = `
<div>
<h2> $${ProxyState.Funds}</h2>
</div>
`
}
FundService()
}
  
