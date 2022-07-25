import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form } from "../style/Form";
import { Wrap } from "../style/Wrap";

const BtnWrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    font-size: 10px;
    margin-top: 5px;
  }
`;

export const Home = () => {
  return (
    <Wrap>
      <Form>
        <h1>👏👏👏환영합니다!!!!!!!!!!!🎉🎉</h1>
        <BtnWrap>
          <Link to="/login"> 로그인▸ </Link>
          <Link to="/signup"> 회원가입▸ </Link>
        </BtnWrap>
      </Form>
    </Wrap>
  );
};
