import React from 'react';
import Sidebar from './sidebar';
import styled from 'styled-components';

const MainContainer = styled.div`
  margin-left: 250px;
  padding: 20px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <MainContainer>
        {children}
      </MainContainer>
    </>
  );
};

export default Layout;
