import { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import clienteService from '../services/clienteService';

interface IhhahModalProps {
	visivel: boolean;
	onClose: any
	clienteId: number 
}


export default function IhhahModalCredito({ visivel, onClose, clienteId }: IhhahModalProps) {
	const [valor, setValor] = useState('');

	async function addSaldo() {
		await clienteService.adicionarSaldo(clienteId, parseInt(valor)); 
		onClose()
	}

	return (
		<Modal
			title="Meu Modal"
			visible={visivel}
			onCancel={() => onClose()}
			footer={[
				<Button key="back" onClick={() => onClose()}>
					Cancelar
				</Button>,
				<Button key="submit" type="primary" onClick={() => addSaldo()}>
					Confirmar
				</Button>,
			]}
		>
			<Input
				placeholder="Digite um valor"
				value={valor}
				onChange={(e) => setValor(e.target.value)}
			/>
		</Modal>
	);
};

