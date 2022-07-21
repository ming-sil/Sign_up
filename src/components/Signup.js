import {
  faCake,
  faCakeCandles,
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Form } from "../style/Form";
import { ProfileImg } from "../style/ProfileImg";
import { Wrap } from "../style/Wrap";

const userDb = {
  dbEmailID: "asdf@asdf",
  dbPassword: "qwer1234",
};

const Input = styled.div`
  svg {
    transform: translateX(20px);
  }
  input {
    all: unset;
    font-size: 8px;
    border-bottom: 1px solid white;
    padding: 5px 30px;
    margin-bottom: 30px;
    background: transparent;
    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }
`;

const Btn = styled.button`
  all: unset;
  font-size: 10px;
  width: 40%;
  padding: 10px 20px;
  border-radius: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor};
`;

const Arrow = styled.span`
  animation-name: ${(props) => props.ani};
  animation-duration: 0.3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  @keyframes arrow_ani {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(5px);
    }
  }
`;

const GotoSignup = styled.span`
  margin-top: 15px;
  text-align: center;
  font-size: 8px;
  font-weight: 100;
  a {
    font-size: 12px;
    font-weight: 400;
  }
`;

const Text = styled.h3``;

const ErrorMessage = styled.span`
  font-size: 10px;
  font-weight: 900;
  color: crimson;
  margin-bottom: 15px;
`;

export const Signup = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState("none");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    const { emailID, password } = getValues();
    const { dbEmailID, dbPassword } = userDb;

    if (emailID !== dbEmailID || password !== dbPassword) {
      setError("result", { message: "아이디 혹은 비밀번호가 틀렸습니다." });
    } else {
      clearErrors("result");
    }

    if (isValid === true) {
      setPopup("block");
    }
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ProfileImg />
        <Input>
          <span>ID</span>
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            {...register("emailID", {
              required: "아이디를 입력해 주세요",
              pattern: {
                value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message:
                  "ID는 계정@도메인.최상위도메인의 이메일 형식으로 작성되어야 합니다.",
              },
            })}
            type="text"
            placeholder="Email ID"
          />
        </Input>
        <Input>
          <span>PASSWORD</span>
          <FontAwesomeIcon icon={faLock} />
          <input
            {...register("password", {
              required: "비밀번호를 입력해 주세요",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/,
                message:
                  "비밀번호는 문자, 숫자 조합으로 8자 이상 작성되어야 합니다.",
              },
            })}
            type="password"
            placeholder="Password"
          />
        </Input>
        <Input>
          <span>CONFIRM PASSWORD</span>
          <FontAwesomeIcon icon={faLock} />
          <input
            {...register("confirmpassword", {
              required: "비밀번호를 확인이 필요합니다.",
              onChange() {},
            })}
            type="password"
            placeholder="Confirm Password"
          />
        </Input>
        <Input>
          <span>NAME</span>
          <FontAwesomeIcon icon={faUser} />
          <input
            {...register("name", { required: "이름을 입력해 주세요." })}
            type="text"
            placeholder="Name"
          />
        </Input>
        <Input>
          <span>BIRTH DATE</span>
          <FontAwesomeIcon icon={faCakeCandles} />
          <input
            {...register("birth", { required: "생일을 선택해 주세요." })}
            type="date"
            placeholder="YY-MM-DD"
          />
        </Input>
        {errors?.EmailID?.message && (
          <ErrorMessage>{errors?.EmailID?.message}</ErrorMessage>
        )}

        {errors?.password?.message && (
          <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        )}
        {errors?.result?.message && (
          <ErrorMessage>{errors?.result?.message}</ErrorMessage>
        )}
        <Btn opacity={isValid ? 1 : 0.5} cursor={isValid ? "pointer" : "auto"}>
          SIGN UP <Arrow ani={isValid ? "arrow_ani" : "none"}>▸</Arrow>
        </Btn>
        <GotoSignup>
          이미 아이디가 있으신가요?
          <br />
          <Link to="/login">로그인</Link>
          하러가기
        </GotoSignup>
      </Form>
      <Form>
        <Text>
          축하합니다!
          <br />
          회원가입이 완료되었습니다!
        </Text>
        <Link to="/login">
          <Btn
            opacity={isValid ? 1 : 0.5}
            cursor={isValid ? "pointer" : "auto"}
          >
            로그인 하러가기
            <Arrow ani={isValid ? "arrow_ani" : "none"}>▸</Arrow>
          </Btn>
        </Link>
      </Form>
    </Wrap>
  );
};
