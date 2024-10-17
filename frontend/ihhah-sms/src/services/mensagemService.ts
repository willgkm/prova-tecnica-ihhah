import { MensagemType } from "../models/MensagemType";
import BaseService from "./BaseService";

class MensagemService extends BaseService<MensagemType> {
  constructor() {
    super("/mensagem");
  }
}

export default new MensagemService();
