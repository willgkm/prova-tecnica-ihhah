import { Button, Space, TableProps, Tag, Tooltip } from "antd";
import ClienteService from '../../services/clienteService';
import { ClienteType } from "../../models/ClienteType";
import IhhahTable from "../../components/ihhahTable";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import clienteService from "../../services/clienteService";

export default function ClientePage() {

	const [clienteData, setClienteData] = useState<ClienteType[]>([]);

	useEffect(() => {		
		fetchClientes();
	}, []);

	async function fetchClientes() {
		try {
			const data = await ClienteService.getAll();
			setClienteData(data);
		} catch (error) {
			console.error('Erro ao buscar clientes:', error);
		}
	};
	
	function edit(id: number) {
		console.log("edit");
		
	}

	async function remove(id: number) {
		await clienteService.delete(id);
		await fetchClientes();
			
	}

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
			render: (_, cliente) => (
				<Tooltip title={`CNPJ: ${cliente.cnpj}, CPF: ${cliente.cpf}`}>
					<span>{cliente.nomeEmpresa}</span>
				</Tooltip>),

		},
		{
			title: 'Plano',
			dataIndex: 'plano.nome',
			key: 'plano',
			render: (_, cliente) => <Tag>{cliente.plano!.nome}</Tag>,
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
			render: (_, cliente) => cliente.plano!.id == 1 ?
				(<span>Cliente Pre-pago</span>) :
				(
					<>
						{new Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						}).format(cliente.plano!.limiteConsumo)}
					</>),

		},
		{
			title: 'Ações',
			key: 'action',
			render: (_, cliente) => (
				<Space size="middle">
					<Tooltip title="edit" >
        		<Button type="primary" shape="circle" icon={<EditOutlined />} onClick={() => edit(cliente.id!)}/>
					</Tooltip>
					<Tooltip title="delete" >
						<Button type="primary" danger shape="circle" icon={<DeleteOutlined/>} onClick={() => remove(cliente.id!)}/>
					</Tooltip>
					
				</Space>
			),
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