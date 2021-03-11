import React from 'react';
import Map from '../../components/Map';
import { render } from '@testing-library/react';

describe('Map Component', () => {
  it('should be able to render the map', async () => {
    render(
      <Map
        initialPosition={{ latitude: 10, longitude: 20 }}
        markers={[{ latitude: 10, longitude: 20 }]}
      />,
    );
  });
});
