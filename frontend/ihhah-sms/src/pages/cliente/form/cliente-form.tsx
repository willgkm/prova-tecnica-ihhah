import { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';


import { ClienteType } from '../../../models/ClienteType';
import clienteService from '../../../services/clienteService';
import { PlanoType } from '../../../models/PlanoType';
import planoService from '../../../services/planoService';



export default function ClienteFormPage() {
  const [planos, setPlanos] = useState<PlanoType[]>([])
  const [formValues, setFormValues] = useState<ClienteType>({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    cnpj: '',
    nomeEmpresa: '',
    saldo: 10,
  });
  
  useEffect(() => {    
    fetchPlanos();
  }, []);
  
  async function fetchPlanos() {
    try {
      const data = await planoService.getAll();
      setPlanos(data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };
  
  function submit(event: any) {
    event.preventDefault();
    save(); 
  };

  function save (){
    clienteService.save(formValues)
  }
  
  function handleChange(changedValues: any) {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...changedValues,
    }));
  };

  function handlePlanoChange(value: number) {
    const selectedPlano = planos.find(plano => plano.id === value);
    setFormValues(prev => ({
      ...prev,
      plano: selectedPlano || undefined,
    }));
  };


  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      size={"middle"}
      onValuesChange={handleChange}
      onFinish={submit}
      style={{ maxWidth: 600 }}
    >

      <Form.Item label="Nome" name="nome" rules={[{ required: true, message: 'Por favor insira o nome!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Por favor insira o email!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Telefone" name="telefone" rules={[{ required: true, message: 'Por favor insira o telefone!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="CPF" name="cpf" rules={[{ required: true, message: 'Por favor insira o CPF!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="CNPJ" name="cnpj" rules={[{ required: true, message: 'Por favor insira o CNPJ!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Nome da Empresa" name="nomeEmpresa" rules={[{ required: true, message: 'Por favor insira o nome da empresa!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Plano" name={['plano', 'nome']} rules={[{ required: true, message: 'Por favor selecione um plano!' }]}>
        <Select onChange={handlePlanoChange}>
          {planos.map(plano => (
            <Select.Option key={plano.id} value={plano.id}>{plano.nome}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Enviar</Button>
      </Form.Item>
    </Form>
  );
};
