import { Row, Col, Button, Table as AntTable, Empty } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';

interface IhhahTableProperties {
    label: string;
    data: Array<object>; 
    columns: Array<object>; 
    formLink: string;
  }

  
export default function  IhhahTable({ label, data, columns, formLink }: IhhahTableProperties) {
  
  const navigate = useNavigate();
  
  return (
    <div>
      <Row justify="space-between" align="middle" style={{ padding: '0 1rem' }}>
        <Col>
          <h2>Tabela de {label}s</h2>
        </Col>
        <Col>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => navigate(formLink)}>
            Novo {label}
          </Button>
        </Col>
      </Row>
      
      <Row>
        <div style={{ height: '100%', width: '100%' }}>
            <AntTable dataSource={data} 
            columns={columns} 
            pagination={{ position: [] }}
            locale={{ emptyText: <Empty description="Sem dados cadastrados"></Empty> }}
            />
        </div>
      </Row>
    </div>
  );
};