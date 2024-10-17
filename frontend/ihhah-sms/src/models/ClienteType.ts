export interface PlanoType {
    id: number;
    nome: string;
    consumo: number; 
    limiteConsumo: number; 
  }
  
  export interface ClienteType {
    id?: number;
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    cnpj: string;
    nomeEmpresa: string;
    plano?: PlanoType;
    saldo: number;
  }
  