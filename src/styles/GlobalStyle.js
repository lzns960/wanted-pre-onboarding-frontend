import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`    
* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  outline:none;
  border:none;
  font-family: "Jost", sans-serif;

  input {
  outline: none;
  }
  ul, li {
    list-style: none;
  }
  a {
  text-decoration: none;
  }
}
`;

export default GlobalStyle;
