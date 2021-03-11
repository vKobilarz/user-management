import React from 'react';

import { render } from '@testing-library/react';
import UserInfo from '../../pages/UserInfo';

jest.mock('react-router-dom', () => ({
  useParams: () => ({ id: '1' }),
}));

jest.mock('../../hooks/UserContext', () => {
  return {
    useUsers: () => ({
      getUserById: async () => ({
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
      }),
    }),
  };
});

describe('UserInfo Page', () => {
  it('should be able to render the page', async () => {
    const { debug } = render(<UserInfo />);

    debug();
  });
});
