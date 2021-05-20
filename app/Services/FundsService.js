import {ProxyState} from "../AppState.js"

class FundsService{
  addFunds(){
    ProxyState.Funds += 50 
  }
}