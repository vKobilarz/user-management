import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Input from '../../components/Input';
import Map from '../../components/Map';

import PageContainer from '../../components/PageContainer';
import { Title } from '../../components/PageTitle/styles';
import Section from '../../components/Section';
import { useUsers } from '../../hooks/UserContext';
import User from '../../interfaces/User';

import { FlexContainer, MapContainer } from './styles';

interface PathParams {
  id: string;
}

const UserInfo = () => {
  const [user, setUser] = useState<User | null>(null);
  const { getUserById } = useUsers();

  const pathParam: PathParams = useParams();

  useEffect(() => {
    async function fetchData() {
      const user = await getUserById({ id: Number(pathParam.id) });

      setUser(user);
    }

    fetchData();
  }, [pathParam.id, getUserById]);

  return (
    <PageContainer>
      <Title>Informações do Usuário</Title>
      {user && (
        <>
          <Section title="Informações Básicas">
            <FlexContainer>
              <Input
                label="Nome"
                value={user.name}
                disabled
              />
            </FlexContainer>
            <FlexContainer>
              <Input
                label="E-Mail"
                value={user.email}
                disabled
              />
              <Input
                label="Telefone"
                value={user.phone}
                disabled
              />
            </FlexContainer>
            <FlexContainer>
              <Input
                label="Usuário"
                value={user.username}
                disabled
              />
              <Input
                label="Website"
                value={user.website}
                disabled
              />
            </FlexContainer>
          </Section>
          <Section title="Empresa">
            <FlexContainer>
              <Input
                label="Nome"
                value={user.company?.name}
                disabled
              />
            </FlexContainer>
            <FlexContainer>
              <Input
                label="Catch Phrase"
                value={user.company.catchPhrase}
                disabled
              />
              <Input
                label="Bs"
                value={user.company.bs}
                disabled
              />
            </FlexContainer>
          </Section>
          <Section title="Endereço">
            <FlexContainer>
              <Input
                label="Cidade"
                value={user.address.city}
                disabled
              />
              <Input
                label="Rua"
                value={user.address.street}
                disabled
              />
            </FlexContainer>
            <FlexContainer>
              <Input
                label="Suite"
                value={user.address.suite}
                disabled
              />
              <Input
                label="CEP"
                value={user.address.zipcode}
                disabled
              />
            </FlexContainer>
            <MapContainer>
              <Map
                initialPosition={{
                  latitude: Number(user.address.geo.lat),
                  longitude: Number(user.address.geo.lng),
                }}
                markers={[
                  {
                    latitude: Number(user.address.geo.lat),
                    longitude: Number(user.address.geo.lng),
                  },
                ]}
              />
            </MapContainer>
          </Section>
        </>
      )}
    </PageContainer>
  );
};

export default UserInfo;
