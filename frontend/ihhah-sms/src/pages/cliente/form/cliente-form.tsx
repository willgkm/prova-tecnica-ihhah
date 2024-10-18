import { useEffect, useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { PlanoType } from '../../../models/PlanoType';
import planoService from '../../../services/planoService';
import { useNavigate, useParams } from 'react-router-dom';
import clienteService from '../../../services/clienteService';
import { ClienteType } from '../../../models/ClienteType';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const somenteDigitosRegex = /^\d+$/;
const telefoneRegex = /^\d{2} \d{5}-\d{4}$/; 

export default function ClienteFormPage() {
  const [form] = Form.useForm();
  const [planos, setPlanos] = useState<PlanoType[]>([]);
  const [planoSelecionado, setPlanoSelecionado] = useState<PlanoType>();

  const navigate = useNavigate(); 
  const { id } = useParams(); 

  useEffect(() => {

    fetchPlanos();
    if (id) {
      getCliente();
    }

  }, []);

  async function getCliente() {
    try {
      if (id) {
        const data = await clienteService.getById(parseInt(id));
        form.setFieldsValue(data);
        setPlanoSelecionado(data.plano);
        form.setFieldsValue({ plano: {id: data.plano!.id } }); 
      }
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  }

  async function fetchPlanos() {
    try {
      const data = await planoService.getAll();
      setPlanos(data);
    } catch (error) {
      console.error('Erro ao buscar planos:', error);
    }
  }

  async function submit (values: any) {
    const formularioFormatado = {
      ...values,
      id: id || null , 
      plano: planoSelecionado ,
    };

    if ( id ) {
      await edit(formularioFormatado)
    } else {
      await save(formularioFormatado)
    }
    navigate("/cliente");

  };

  async function edit(values: ClienteType) {
    await clienteService.update(parseInt(id!), values);
    navigate("/cliente");
  }

  async function save(values: ClienteType) {
    await clienteService.save(values);
    navigate("/cliente");
  }

  async function handlePlanoChange(value: number) {
    form.setFieldsValue({ plano: {id: value } });
    const planoSelecionado = planos.find((elem) => elem.id === value);
    setPlanoSelecionado(planoSelecionado);
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
          { pattern: emailRegex, message: 'Formato de email inválido!' }
        ]}
      >
        <Input placeholder="email@dominio.com" />
      </Form.Item>
      <Form.Item 
        label="Telefone" 
        name="telefone" 
        rules={[
          { required: true, message: 'Por favor insira o telefone!' },
          { pattern: telefoneRegex, message: 'Formato inválido! Use (99) 99999-9999' }
        ]}
      >
        <Input placeholder="(99) 99999-9999" />
      </Form.Item>
      <Form.Item 
        label="CPF" 
        name="cpf" 
        rules={[
          { required: true, message: 'Por favor insira o CPF!' },
          { pattern: somenteDigitosRegex, message: 'O CPF deve conter apenas dígitos!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        label="CNPJ" 
        name="cnpj" 
        rules={[
          { required: true, message: 'Por favor insira o CNPJ!' },
          { pattern: somenteDigitosRegex, message: 'O CNPJ deve conter apenas dígitos!' }
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
