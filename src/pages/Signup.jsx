import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Main from '../components/Main';
import * as auth from '../modules/auth';

export default function Signup() {
  const navigate = useNavigate();

  const linkSignin = () => {
    navigate('/');
  };
  const linkTodos = () => {
    navigate('/todos');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const changeEmail = (event) => {
    let value = event.target.value;
    if (value === '') {
      setEmailErrorMessage('이메일을 입력해주세요.');
      setEmailError(true);
    } else if (!value.includes('@')) {
      setEmailErrorMessage('이메일에 @가 포함되어야 합니다.');
      setEmailError(true);
    } else setEmailError(false);
    setEmail(value);
  };

  const changePassword = (event) => {
    let value = event.target.value;
    if (value === '') {
      setPasswordErrorMessage('비밀번호를 입력해주세요.');
      setPasswordError(true);
    } else if (value.length < 8) {
      setPasswordErrorMessage('비밀번호는 8자 이상 입력해주세요.');
      setPasswordError(true);
    } else setPasswordError(false);
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailError & !passwordError) {
      const response = await auth.signup({ email: email, password: password });
      if (response != undefined) {
        alert('회원가입을 성공적으로 완료했습니다!');
        linkSignin();
      }
    }
  };

  useEffect(() => {
    const userToken = localStorage.getItem('user');
    if (userToken) {
      linkTodos();
    }
  }, []);

  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <TextField
          onChange={changeEmail}
          data-testid="email-input"
          className="input"
          label="Email"
          type="text"
          placeholder="이메일을 입력하세요."
          variant="standard"
          required
          fullWidth
        />
        <ErrorMsg>{emailError ? emailErrorMessage : ''}</ErrorMsg>
        <TextField
          onChange={changePassword}
          data-testid="password-input"
          className="input"
          label="Password"
          variant="standard"
          type="password"
          placeholder="비밀번호를 입력하세요."
          required
          fullWidth
        />
        <ErrorMsg>{passwordError ? passwordErrorMessage : ''}</ErrorMsg>

        {emailError || passwordError === true ? (
          <Button variant="contained" disabled className="button" fullWidth>
            회원가입
          </Button>
        ) : (
          <Button
            data-testid="signup-button"
            type="submit"
            variant="contained"
            className="button"
            fullWidth>
            회원가입
          </Button>
        )}

        <Button
          onClick={linkSignin}
          variant="outlined"
          className="button"
          fullWidth>
          로그인 하러가기
        </Button>
      </form>
    </Main>
  );
}
const ErrorMsg = styled.p`
  color: #ce4545;
  text-align: start;
`;
