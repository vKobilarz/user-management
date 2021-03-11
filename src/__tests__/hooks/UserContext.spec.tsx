import { renderHook } from '@testing-library/react-hooks';
import { UserProvider, useUsers } from '../../hooks/UserContext';

import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('User Context', () => {
  it('should be able to request all users', async () => {
    apiMock.onGet('users').reply(200, [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      },
    ]);

    const { result, waitForNextUpdate } = renderHook(() => useUsers(), {
      wrapper: UserProvider,
    });

    result.current.getUsers();

    await waitForNextUpdate();

    expect(result.current.users[0].name).toEqual('Leanne Graham');
  });

  it('should be able to request a user by ID', async () => {
    apiMock.onGet('users/1').reply(200, {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    });

    const { result } = renderHook(() => useUsers(), {
      wrapper: UserProvider,
    });

    const user = await result.current.getUserById({ id: 1 });

    // @ts-ignore
    expect(user.name).toEqual('Leanne Graham');
  });
});
