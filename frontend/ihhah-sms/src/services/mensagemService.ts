import { MensagemType } from "../models/MensagemType";
import BaseService from "./baseService";

class MensagemService extends BaseService<MensagemType> {
  constructor() {
    super("/mensagem");
  }
}

export default new MensagemService();
