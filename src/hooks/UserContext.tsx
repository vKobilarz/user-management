import React, { createContext, FC, useContext, useState } from 'react';
import User from '../interfaces/User';

import api from '../services/api';

interface getUserByIdParams {
  id: number;
}

interface UserContextState {
  users: User[];
  getUsers(): Promise<void>;
  getUserById(params: getUserByIdParams): Promise<User>;
}

const UserContext = createContext<UserContextState>({} as UserContextState);

export const UserProvider: FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  async function getUsers() {
    const { data } = await api.get<User[]>('users');

    setUsers(data);
  }

  async function getUserById({ id }: getUserByIdParams): Promise<User> {
    const { data } = await api.get<User>(`users/${id}`);

    return data;
  }

  return (
    <UserContext.Provider
      value={{
        users,
        getUsers,
        getUserById,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUsers(): UserContextState {
  const context = useContext(UserContext);

  return context;
}
