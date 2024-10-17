import { TableProps, Tag, Tooltip } from "antd";
import IhhahTable from "../../components/IhhahTable";

interface ClienteType {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  cnpj: string;
  nomeEmpresa: string;
  plano: {
    id: number;
    nome: string;
		consumo: number; 
		limiteConsumo: number; 
  };
  saldo: number;
}

export default function ClientePage() {

	const clienteData: ClienteType[] = [
		{	
			id:1,
			nome: "João da Silva",
			email: "joao.silva@email.com",
			telefone: "(11) 98765-4321",
			cpf: "123.456.789-09",
			cnpj: "12.345.678/0001-95",
			nomeEmpresa: "Empresa Silva LTDA",
			plano: {
				id: 1,
				nome: "Pre-pago",
				consumo: 0, 
				limiteConsumo:0
			},
			saldo: 200.00,
		},
		{
			id:2,
			nome: "Maria Oliveira",
			email: "maria.oliveira@email.com",
			telefone: "(21) 99876-5432",
			cpf: "987.654.321-00",
			cnpj: "98.765.432/0001-01",
			nomeEmpresa: "Maria & Cia",
			plano: {
				id: 2,
				nome: "Pós-pago",
				consumo: 20, 
				limiteConsumo:100
			},
			saldo: 100.00,
		},
		{
			id:3,
			nome: "Carlos Pereira",
			email: "carlos.pereira@email.com",
			telefone: "(31) 91234-5678",
			cpf: "321.654.987-00",
			cnpj: "12.345.678/0001-96",
			nomeEmpresa: "Carlos Comércio",
			plano: {
				id: 2,
				nome: "Pós-pago",
				consumo: 42.50, 
				limiteConsumo:100
			},
			saldo: 0.00,
		}
	];
	
	const columns: TableProps<ClienteType>['columns'] = [
		{
			title: 'Nome',
			dataIndex: 'nome',
			key: 'nome',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'Telefone',
			dataIndex: 'telefone',
			key: 'telefone',
		},
		{
			title: 'Nome da Empresa',
			dataIndex: 'nomeEmpresa',
			key: 'nomeEmpresa',
			render: (_, cliente ) => (  
			<Tooltip title={`CNPJ: ${cliente.cnpj}, CPF: ${cliente.cpf}`}>
				<span>{cliente.nomeEmpresa}</span>
			</Tooltip>), 

		},
		{
			title: 'Plano',
			dataIndex: 'plano.nome',
			key: 'plano',
			render: (_, cliente ) => <Tag>{cliente.plano.nome}</Tag>, 
		},
		{
			title: 'Saldo',
			dataIndex: 'saldo',
			key: 'saldo',
			render: (saldo) => {
				return new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				}).format(saldo);
			},
		},
		{
			title: 'Limite',
			dataIndex: 'limite',
			key: 'limite',
		},
	];
	

	return (
		<>
			<IhhahTable
				label="cliente" 
				data={clienteData} 
				columns={columns} 
				formLink="/cliente/new" 
			/>
		</>


	)


}