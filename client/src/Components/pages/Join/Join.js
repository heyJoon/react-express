import React, { useState } from "react";
import styled from "styled-components";
import { AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { joinUser } from "../../../actions/userActions";
import { useDispatch } from "react-redux";
import Auth from "../../../hoc/auth";
import { COLORS } from "../../GlobalStyles";

const JoinBlock = styled.form`
  position: absolute;
  left: 40%;
  padding: 2rem;
  background-color: white;
  margin-top: 6rem;
  /* margin-left: auto;
  margin-right: 2rem;
  max-width: 364px; */
`;

const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  height: 3rem;
  font-size: 1.2rem;

  &::placeholder {
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid black;

  svg {
    font-size: 1.7rem;
  }

  &:last-child {
    background: ${(props) => props.color};
    border: none;
    outline: none;
    font-weight: 600;
    /* padding: 10px; */
    margin-top: 10px;
    border-radius: 10px;
    width: 100%;
    flex: 1;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Join = () => {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");

  // Join State 관리를 해주어야 함. 그래야 로그인 할 수 있음.

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onIdChange = (e) => {
    setId(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onPasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let body = {
      name: Name,
      email: Email,
      id: Id,
      password: Password,
      passwordConfirm: PasswordConfirm,
    };
    console.log(body);
    dispatch(joinUser(body));
    setName("");
    setId("");
    setPassword("");
    setEmail("");
    setPasswordConfirm("");
  };

  return (
    <JoinBlock onSubmit={onSubmit}>
      <label htmlFor="name"></label>
      <InputContainer>
        <BsFillPersonFill />
        <Input
          id="name"
          type="name"
          placeholder="이름을 입력하세요"
          onChange={onNameChange}
          value={Name}
          required
        />
      </InputContainer>
      <label htmlFor="ID"></label>
      <InputContainer>
        <BsFillPersonFill />
        <Input
          id="id"
          type="id"
          placeholder="아이디를 입력하세요"
          onChange={onIdChange}
          value={Id}
          required
        />
      </InputContainer>
      <label htmlFor="password"></label>
      <InputContainer>
        <AiFillLock />
        <Input
          id="password"
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호를 입력하세요"
          onChange={onPasswordChange}
          value={Password}
          required
        ></Input>
      </InputContainer>
      <label htmlFor="password2"></label>
      <InputContainer>
        <AiFillLock />
        <Input
          id="password2"
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호를 입력하세요"
          onChange={onPasswordConfirmChange}
          value={PasswordConfirm}
          required
        ></Input>
      </InputContainer>
      <label htmlFor="email"></label>
      <InputContainer>
        <MdEmail />
        <Input
          id="email"
          placeholder="username111@gmail.com"
          onChange={onEmailChange}
          value={Email}
          required
        ></Input>
      </InputContainer>
      <InputContainer color={COLORS.lightpurple}>
        <Input id="submit" type="submit" value="전송하기" />
      </InputContainer>
    </JoinBlock>
  );
};

export default Auth(Join, false);
