import { ClienteType } from "../models/ClienteType";
import BaseService from "./BaseService";

class ClienteService extends BaseService<ClienteType> {
  constructor() {
    super("/cliente");
  }
}

export default new ClienteService();
