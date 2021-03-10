import React, { createContext, FC, useContext, useState } from 'react';
import User from '../interfaces/User';

import api from '../services/api';

interface getUserByIdParams {
  id: number;
}

interface UserContextState {
  users: User[];
  getUsers(): Promise<void>;
  getUserById(params: getUserByIdParams): Promise<User | void>;
}

const UserContext = createContext<UserContextState>({} as UserContextState);

export const UserProvider: FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  async function getUsers() {
    try {
      const { data } = await api.get<User[]>('users');

      setUsers(data);
    } catch (err) {
      if (err?.response?.status === 401) {
      }
    }
  }

  async function getUserById({ id }: getUserByIdParams): Promise<User | void> {
    try {
      const { data } = await api.get<User>(`users/${id}`);

      return data;
    } catch (err) {
      if (err?.response?.status === 401) {
      }
    }
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

  if (!context) {
    throw new Error('useUsers must be used within an UserProvider');
  }

  return context;
}
