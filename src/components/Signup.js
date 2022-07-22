import {
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
import { userDb } from "./userDB.js/user";

const Input = styled.div`
  display: flex;
  font-size: 12px;
  div {
    width: 70px;
    display: inline;
    text-align: end;
  }
  svg {
    transform: translateX(20px);
  }
  input {
    all: unset;
    width: 130px;
    font-size: 8px;
    border-bottom: 1px solid white;
    padding: 5px 30px;
    margin-bottom: 30px;
    background: transparent;
    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
      transform: translateY(-4px);
    }
  }
`;

const BtnId = styled.div`
  all: unset;
  font-size: 10px;
  padding: 5px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 120px;
  right: 30px;
  cursor: pointer;
  /* opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor}; */
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

const GotoSignup1 = styled.span`
  margin-top: 15px;
  text-align: center;
  font-size: 8px;
  font-weight: 100;
  a {
    font-size: 12px;
    font-weight: 400;
  }
`;

const GotoSignup2 = styled.span`
  text-align: center;
  position: absolute;
  display: ${(props) => props.apear};
  button {
    width: 100px;
  }
  p {
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
  }
`;

const ErrorMessage = styled.span`
  font-size: 10px;
  font-weight: 900;
  color: crimson;
  margin-bottom: 15px;
`;

export const Signup = () => {
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
  const [popup, setPopup] = useState("none");
  const [a, setA] = useState(false);

  const handleIdCon = () => {
    // console.log(getValues().emailID);
    // console.log(userDb.dbEmailID);
    const { emailID } = getValues();
    if (emailID === userDb.dbEmailID) {
      setError("idResult", { message: "이미 존재하는 아이디 입니다." });
    } else {
      setA(true);
      clearErrors("idResult");
    }
  };

  const onSubmit = () => {
    if (isValid === true) {
      setPopup("block");
    }
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ProfileImg />
        <Input>
          <div>ID</div>
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            {...register("emailID", {
              required: "아이디를 입력해 주세요",
              pattern: {
                value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message:
                  "ID는 '계정@도메인.최상위도메인'의 이메일 형식으로 작성되어야 합니다.",
              },
              onChange() {
                setA(false);
              },
            })}
            type="text"
            placeholder="name@domain.com"
          />
        </Input>
        {a ? (
          <ErrorMessage
            style={{
              color: "blue",
              transform: "translate(10px,-25px)",
              marginBottom: "0",
            }}
          >
            사용가능한 아이디 입니다.
          </ErrorMessage>
        ) : (
          ""
        )}
        <BtnId onClick={handleIdCon}>ID 중복확인</BtnId>

        <Input>
          <div>PASSWORD</div>
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
            placeholder="at least 8 characters"
          />
        </Input>
        <Input>
          <div>
            CONFIRM
            <br />
            PASSWORD
          </div>
          <FontAwesomeIcon icon={faLock} />
          <input
            {...register("confirmpassword", {
              required: "비밀번호를 확인이 필요합니다.",
              onChange() {
                const { password, confirmpassword } = getValues();
                if (password !== confirmpassword) {
                  setError("pwResult", {
                    message: "비밀번호가 일치하지 않습니다.",
                  });
                } else {
                  clearErrors("pwResult");
                }
              },
            })}
            type="password"
            placeholder="Confirm Password"
          />
        </Input>
        <Input>
          <div>NAME</div>
          <FontAwesomeIcon icon={faUser} />
          <input
            {...register("name", { required: "이름을 입력해 주세요." })}
            type="text"
            placeholder="Your Name"
          />
        </Input>
        <Input>
          <div>BIRTH</div>
          <FontAwesomeIcon icon={faCakeCandles} />
          <input
            {...register("birth", {
              required: "생일을 입력해 주세요.",
              pattern: {
                value: /^\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
                message: "올바른 생년월일을 입력해 주세요.",
              },
            })}
            type="text"
            placeholder="YY-MM-DD"
          />
        </Input>
        {errors?.emailID?.message && (
          <ErrorMessage>{errors?.emailID?.message}</ErrorMessage>
        )}
        {errors?.password?.message && (
          <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        )}
        {errors?.confirmpassword?.message && (
          <ErrorMessage>{errors?.confirmpassword?.message}</ErrorMessage>
        )}
        {errors?.name?.message && (
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        )}
        {errors?.birth?.message && (
          <ErrorMessage>{errors?.birth?.message}</ErrorMessage>
        )}
        {errors?.idResult?.message && (
          <ErrorMessage>{errors?.idResult?.message}</ErrorMessage>
        )}
        {errors?.pwResult?.message && (
          <ErrorMessage>{errors?.pwResult?.message}</ErrorMessage>
        )}
        <Btn opacity={isValid ? 1 : 0.5} cursor={isValid ? "pointer" : "auto"}>
          SIGN UP
          <Arrow ani={isValid ? "arrow_ani" : "none"} popup={onSubmit}>
            ▸
          </Arrow>
        </Btn>
        <GotoSignup1>
          이미 아이디가 있으신가요?
          <br />
          <Link to="/login">로그인</Link>
          하러가기
        </GotoSignup1>
      </Form>

      <GotoSignup2 apear={popup}>
        <Form>
          <p>
            🎉축하합니다!🎉
            <br />
            회원가입이 완료되었습니다!
          </p>
          <Link to="/login">
            <Btn
              opacity={isValid ? 1 : 0.3}
              cursor={isValid ? "pointer" : "auto"}
            >
              로그인하러가기
              <Arrow ani={isValid ? "arrow_ani" : "none"}>▸</Arrow>
            </Btn>
          </Link>
        </Form>
      </GotoSignup2>
    </Wrap>
  );
};
