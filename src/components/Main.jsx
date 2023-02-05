import React from 'react';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from './Container';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

export default function Main(props) {
  return (
    <Container>
      <MainWrapper>
        <img
          src={process.env.PUBLIC_URL + '/images/title.png'}
          alt="title"
          className="title"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/main.png'}
          alt="mainImage"
          className="mainImage"
        />

        <ThemeProvider theme={lightTheme}>
          <AuthWrapper>{props.children}</AuthWrapper>
        </ThemeProvider>
      </MainWrapper>
    </Container>
  );
}
const MainWrapper = styled.div`
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  & img {
    max-width: 100%;
    max-height: 30vw;
  }
`;

const AuthWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 30px 0px;
  margin: 50px 50px 0;
  margin-bottom: 50px;

  & form {
    width: 70%;
  }
  .input {
    padding: 15px 0;
    margin-top: 10px;
  }
  .button {
    margin: 10px 0;
  }
`;
