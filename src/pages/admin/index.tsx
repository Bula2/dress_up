import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import styles from "./admin.module.scss"
import {Checkbox, Table} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";

const AdminPage = () => {
  const onChange = (e: CheckboxChangeEvent) => {
    return;
  }
  const dataSource = [
    {
      key: 1,
      date: "12.02.2023",
      email: "123@123.com",
      order: "Nike AirForce",
      price: 9800
    },
  ];

  const columns = [
    {
      title: 'Id',
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Электронная почта',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Заказ',
      dataIndex: 'order',
      key: 'order',
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Подтвердить',
      key: 'action',
      render: (_: any, row: any) => (
        <Checkbox className={styles.row} onChange={onChange}>Выполнен</Checkbox>
      )
    }
  ];
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Table dataSource={dataSource}
               columns={columns}
               rowClassName={styles.row}
               bordered
        />
      </div>
    </MainLayout>
  );
}

export default AdminPage;