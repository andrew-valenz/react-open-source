import React from 'react';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

const dataList = [
  { id: 1, name: 'Steve', email: 'Steve@email.com', location: 'Florida' },
  { id: 2, name: 'Michelle', email: 'Michelle@email.com', location: 'Oregon' },
  { id: 3, name: 'Ben', email: 'Ben@email.com', location: 'Oregon' },
];

export default function StudentTable() {
  return (
    <Table data={dataList}>
      <Column alignwidth={100} sortable fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={100} sortable fixed resizable>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column width={170} fixed resizable>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={100}>
        <HeaderCell>Location</HeaderCell>
        <Cell dataKey="location" />
      </Column>
    </Table>
  );
}
