import { Row, Col, Button, Table as AntTable } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface IhhahTableProperties {
    label: string;
    data: Array<object>; 
    columns: Array<object>; 
    formLink: string;
  }

export default function  IhhahTable({ label, data, columns, formLink }: IhhahTableProperties) {
  return (
    <div>
      <Row justify="space-between" align="middle" style={{ padding: '0 1rem' }}>
        <Col>
          <h2>Tabela de {label}s</h2>
        </Col>
        <Col>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => window.location.href = formLink}>
            Novo {label}
          </Button>
        </Col>
      </Row>
      <Row>
        <AntTable dataSource={data} columns={columns} pagination={{ position: [] }} />
      </Row>
    </div>
  );
};