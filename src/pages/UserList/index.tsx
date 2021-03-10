import React, { FC, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { MdInfo } from 'react-icons/md';

import PageContainer from '../../components/PageContainer';
import { Title } from '../../components/PageTitle/styles';
import { useUsers } from '../../hooks/UserContext';

import { Table, TableContainer } from './styles';

const UserList: FC = () => {
  const { getUsers, users } = useUsers();

  useEffect(() => {
    async function fetchData() {
      await getUsers();
    }

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <PageContainer>
      <Title>Usuários</Title>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Usuário</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>
                  <Link to={`/users/view/${user.id}`}>
                    <MdInfo />
                  </Link>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>
                  <a href={`https://${user.website}`}>{user.website}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};

export default UserList;
