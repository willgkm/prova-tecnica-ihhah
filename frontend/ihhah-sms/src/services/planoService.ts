import { PlanoType } from "../models/PlanoType";
import BaseService from "./BaseService";

class PlanoService extends BaseService<PlanoType> {
  constructor() {
    super("/plano");
  }
}

export default new PlanoService();
