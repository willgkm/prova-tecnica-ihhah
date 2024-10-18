import { Button, Space, TableProps, Tag, Tooltip } from "antd";
import ClienteService from '../../services/clienteService';
import { ClienteType } from "../../models/ClienteType";
import IhhahTable from "../../components/ihhahTable";
import { useEffect, useState } from "react";
import clienteService from "../../services/clienteService";
import { useNavigate } from "react-router-dom";
import IhhahModalCredito from "../../components/ihhahModalCredito";
import IhhahModalLimite from "../../components/ihhahModalLimite";

export default function ClientePage() {

	const [clienteData, setClienteData] = useState<ClienteType[]>([]);
	const [modalCreditoVisivel, setModalCreditoVisivel] = useState(false);
	const [modalLimiteVisivel, setModalLimiteVisivel] = useState(false);
	const [clienteId, setClienteId] = useState<number>(0);

	const navigate = useNavigate();

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
		navigate(`/cliente/${id}`,)
	}

	async function remove(id: number) {
		await clienteService.delete(id);
		await fetchClientes();
	}

	function openModalCredito(clienteId: number | undefined) {
		setClienteId(clienteId!)
		setModalCreditoVisivel(true);
	};

	async function closeModalCredito() {
		setModalCreditoVisivel(false);
		await fetchClientes();

	};

	function openModalLimite(clienteId: number | undefined) {
		setClienteId(clienteId!)
		setModalLimiteVisivel(true);
	};

	async function closeModalLimite() {
		setModalLimiteVisivel(false);
		await fetchClientes();
	};

	const columns: TableProps<ClienteType>['columns'] = [
		{
			title: 'Nome',
			dataIndex: 'nome',
			key: 'nome',
			render: (_, cliente) => (
				<Tooltip title={`Email: ${cliente.email}`}>
					<span>{cliente.nome}</span>
				</Tooltip>),
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
			dataIndex: 'plano.id',
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
						}).format(cliente.limiteConsumo)}
					</>),

		},
		{
			title: 'Ações',
			key: 'action',
			render: (_, cliente) => (
				<Space size="middle">
					<Tooltip title="Adicionar saldo." >
						<Button type="primary" size="small"   onClick={() => openModalCredito(cliente.id)} >
							Saldo
						</Button>
					</Tooltip>
					<Tooltip title="Alterar limite." >
						<Button type="primary" size="small"   onClick={() => openModalLimite(cliente.id)} >
							Limite
						</Button>
					</Tooltip>
					<Tooltip title="Editar cadastro" >
						<Button type="primary" size="small"   onClick={() => edit(cliente.id!)} >
							Plano
						</Button>
					</Tooltip>
					<Tooltip title="Excluir cadastro" >
						<Button type="primary" size="small" danger   onClick={() => remove(cliente.id!)} >
							Excluir
						</Button>
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
			<IhhahModalCredito
				visivel={modalCreditoVisivel}
				onClose={closeModalCredito}
				clienteId={clienteId} />
			<IhhahModalLimite
				visivel={modalLimiteVisivel}
				onClose={closeModalLimite}
				clienteId={clienteId} />
		</>
	)


}