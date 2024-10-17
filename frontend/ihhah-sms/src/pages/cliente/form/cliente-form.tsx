import { useEffect, useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { PlanoType } from '../../../models/PlanoType';
import planoService from '../../../services/planoService';
import { useParams } from 'react-router-dom';

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const digitsOnlyPattern = /^\d+$/;
const phonePattern = /^\d{2} \d{5}-\d{4}$/; 

export default function ClienteFormPage() {
  const [form] = Form.useForm();
  const [planos, setPlanos] = useState<PlanoType[]>([]);
  const { id } = useParams(); 

  useEffect(() => {
    fetchPlanos();
  }, []);

  async function fetchPlanos() {
    try {
      const data = await planoService.getAll();
      setPlanos(data);
    } catch (error) {
      console.error('Erro ao buscar planos:', error);
    }
  }

  const submit = async (values: any) => {
    const formattedValues = {
      ...values,
      id: id || null , 
      plano: { id: values.plano.nome },
    };
    console.log('Form values:', formattedValues);
  };

  const handlePlanoChange = (value: number) => {

    form.setFieldsValue({ plano: {id: value } }); 

  };

  return (
    <Form
      form={form}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      size={"middle"}
      onFinish={submit}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Nome" name="nome" rules={[{ required: true, message: 'Por favor insira o nome!' }]}>
        <Input />
      </Form.Item>
      <Form.Item 
        label="Email" 
        name="email" 
        rules={[
          { required: true, message: 'Por favor insira o email!' },
          { pattern: emailPattern, message: 'Formato de email inválido!' }
        ]}
      >
        <Input placeholder="email@dominio.com" />
      </Form.Item>
      <Form.Item 
        label="Telefone" 
        name="telefone" 
        rules={[
          { required: true, message: 'Por favor insira o telefone!' },
          { pattern: phonePattern, message: 'Formato inválido! Use (99) 99999-9999' }
        ]}
      >
        <Input placeholder="(99) 99999-9999" />
      </Form.Item>
      <Form.Item 
        label="CPF" 
        name="cpf" 
        rules={[
          { required: true, message: 'Por favor insira o CPF!' },
          { pattern: digitsOnlyPattern, message: 'O CPF deve conter apenas dígitos!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        label="CNPJ" 
        name="cnpj" 
        rules={[
          { required: true, message: 'Por favor insira o CNPJ!' },
          { pattern: digitsOnlyPattern, message: 'O CNPJ deve conter apenas dígitos!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        label="Nome da Empresa" 
        name="nomeEmpresa" 
        rules={[{ required: true, message: 'Por favor insira o nome da empresa!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        label="Plano" 
        name={['plano', 'nome']}
        rules={[{ required: true, message: 'Por favor selecione um plano!' }]}
      >
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
}
