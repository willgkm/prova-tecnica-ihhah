import { TableProps, Tag, Tooltip } from "antd";
import ClienteService  from '../../services/clienteService';
import { ClienteType } from "../../models/ClienteType";
import IhhahTable from "../../components/ihhahTable";
import { useEffect, useState } from "react";

export default function ClientePage() {

	const [clienteData, setClienteData] = useState<ClienteType[]>([]);

	useEffect(() => {
		const fetchClientes = async () => {
		  try {
			const data = await ClienteService.getAll();
			setClienteData(data);
		  } catch (error) {
			console.error('Erro ao buscar clientes:', error);
		  }
		};
	
		fetchClientes();
	  }, []);

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
			render: (_, cliente ) => <Tag>{cliente.plano!.nome}</Tag>, 
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
			render: (_, cliente ) => cliente.plano!.id == 1 ?
			(<span>Cliente Pre-pago</span>) : 
			(
			<>
				{ new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				}).format(cliente.plano!.limiteConsumo)}
			</>) , 

		},
	];
	

	return (
		<>
			<IhhahTable
				label="cliente" 
				data={clienteData} 
				columns={columns} 
				formLink="/cliente/novo" 
			/>
		</>


	)


}