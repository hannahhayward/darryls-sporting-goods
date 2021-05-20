
import { FundsController } from "./Controllers/FundsController.js";
import {ItemsController} from "./Controllers/ItemsController.js";

class App {
 fundsController = new FundsController();
 itemsController = new ItemsController();
}

window["app"] = new App();
