import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
  span {
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
  }
`;

const ErrorMessage = styled.span`
  font-size: 10px;
  font-weight: 900;
  color: crimson;
  margin-bottom: 15px;
`;

export const Login = () => {
  const navigate = useNavigate();

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
    console.log(emailID !== dbEmailID || password !== dbPassword);
    if (emailID === dbEmailID && password === dbPassword) {
      navigate("/");
    }
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ProfileImg />
        <Input>
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            {...register("EmailID", {
              required: "아이디를 입력해 주세요",
              minLength: {
                value: 5,
                message:
                  "ID는 다섯자 이상의 이메일 형식으로 작성되어야 합니다.",
              },
            })}
            type="email"
            placeholder="Email ID"
          />
        </Input>
        <Input>
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
          LOGIN <span ani={isValid ? "arrow_ani" : "none"}>▸</span>
        </Btn>
      </Form>
    </Wrap>
  );
};
