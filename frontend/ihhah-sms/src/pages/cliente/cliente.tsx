import IhhahTable from "../../components/IhhahTable";


export default function ClientePage() {

	const clienteData = [
		{
			"nome": "João da Silva",
			"email": "joao.silva@email.com",
			"telefone": "(11) 98765-4321",
			"cpf": "123.456.789-09",
			"cnpj": "12.345.678/0001-95",
			"nomeDaEmpresa": "Empresa Silva LTDA",
			"idPlano": {
				"id": 1,
				"nome": "Plano Básico"
			},
			"saldo": 1500.00,
			"limite": 3000.00
		},
		{
			"nome": "Maria Oliveira",
			"email": "maria.oliveira@email.com",
			"telefone": "(21) 99876-5432",
			"cpf": "987.654.321-00",
			"cnpj": "98.765.432/0001-01",
			"nomeDaEmpresa": "Maria & Cia",
			"idPlano": {
				"id": 2,
				"nome": "Plano Avançado"
			},
			"saldo": 2500.00,
			"limite": 5000.00
		},
		{
			"nome": "Carlos Pereira",
			"email": "carlos.pereira@email.com",
			"telefone": "(31) 91234-5678",
			"cpf": "321.654.987-00",
			"cnpj": "12.345.678/0001-96",
			"nomeDaEmpresa": "Carlos Comércio",
			"idPlano": {
				"id": 3,
				"nome": "Plano Premium"
			},
			"saldo": 3200.00,
			"limite": 7000.00
		}
	]

	const columns = [
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
			title: 'CPF',
			dataIndex: 'cpf',
			key: 'cpf',
		},
		{
			title: 'CNPJ',
			dataIndex: 'cnpj',
			key: 'cnpj',
		},
		{
			title: 'Nome da Empresa',
			dataIndex: 'nomeDaEmpresa',
			key: 'nomeDaEmpresa',
		},
		{
			title: 'Plano',
			dataIndex: 'idPlano.nome',
			key: 'idPlano',
		},
		{
			title: 'Saldo',
			dataIndex: 'saldo',
			key: 'saldo',
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