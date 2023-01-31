import React from 'react';
import { Table } from 'rsuite-table';

const dataList = [
  { id: 1, name: 'Steve', email: 'Steve@email.com', location: 'Florida' },
  { id: 2, name: 'Michelle', email: 'Michelle@email.com', location: 'Oregon' },
  { id: 3, name: 'Ben', email: 'Ben@email.com', location: 'Oregon' },
];

export default function StudentTable() {
  return <Table data={dataList}></Table>;
}
