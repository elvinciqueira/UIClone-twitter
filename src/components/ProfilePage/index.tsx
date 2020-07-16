import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Elvin Ciqueira</h1>
        <h2>@elvin_ciqueira</h2>

        <p>
          Alumni at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 25 de Dezembro de 1999
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>89</strong>
          </span>
          <span>
            <strong>200 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
