import { PlanoType } from "../models/PlanoType";
import BaseService from "./baseService";

class PlanoService extends BaseService<PlanoType> {
  constructor() {
    super("/plano");
  }
}

export default new PlanoService();
