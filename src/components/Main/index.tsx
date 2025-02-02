import React from 'react';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  EmailIcon,
  SearchIcon,
  BellIcon,
  HomeIcon,
} from './styles';

import ProfilePage from '../ProfilePage';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Elvin Ciqueira</strong>
          <span>300 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
