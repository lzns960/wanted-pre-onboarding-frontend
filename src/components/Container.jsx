import React from 'react';
import styled from 'styled-components';

export default function Container(props) {
  return <MainContainer>{props.children}</MainContainer>;
}

const MainContainer = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  // border-radius: 10px;
  // border: 2px solid black;
`;
