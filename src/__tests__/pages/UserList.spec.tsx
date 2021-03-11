import { render } from '@testing-library/react';
import React from 'react';

import UserList from '../../pages/UserList';

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('../../hooks/UserContext', () => {
  return {
    useUsers: () => ({
      getUsers: jest.fn(),
      users: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        },
      ],
    }),
  };
});

describe('UserList Page', () => {
  it('should be able to list table fields', () => {
    const { getByText } = render(<UserList />);

    getByText('Leanne Graham');
    getByText('Bret');
    getByText('Sincere@april.biz');
    getByText('1-770-736-8031 x56442');
    getByText('hildegard.org');
  });
});
