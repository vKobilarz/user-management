import React from 'react';
import { render } from '@testing-library/react';
import Section from '../../components/Section';

describe('Section Component', () => {
  it('should be able to render a section title', () => {
    const { getByText } = render(
      <Section title="Informações Básicas"></Section>,
    );

    const titleElement = getByText('Informações Básicas');

    expect(titleElement).toBeTruthy();
  });

  it('should be able to render a section content', () => {
    const { getByText } = render(
      <Section title="Informações Básicas">
        <p>Conteúdo</p>
      </Section>,
    );

    const contentElement = getByText('Conteúdo');

    expect(contentElement).toBeTruthy();
  });
});
