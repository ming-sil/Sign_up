import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://sapiensnetwork.eu/wp-content/uploads/2021/01/gradient-background-02.jpg")
    no-repeat center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 30px;
`;

const ProfileImg = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid white;
  border-radius: 50%;
  background: url("https://iwillbeyourphotoguide.com/wp-content/uploads/2018/11/camera-icon-white-300x300.png")
    no-repeat center / 80%;
  margin-bottom: 40px;
`;

const Input = styled.div`
  width: 80%;
  svg {
    transform: translateX(20px);
  }
  input {
    all: unset;
    border-bottom: 1px solid white;
    padding: 5px 30px;
    margin-bottom: 30px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }
`;

const Btn = styled.button`
  all: unset;
  width: 50%;
  padding: 10px 20px;
  border-radius: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Signup = () => {
  return (
    <Wrap>
      <LoginWrap>
        <ProfileImg />
        <Input>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="email" name="ID" placeholder="Email ID" />
        </Input>
        <Input>
          <FontAwesomeIcon icon={faLock} />
          <input type="password" name="P/W" placeholder="Password" />
        </Input>
        <Input>
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            name="Confirm P/W"
            placeholder="Confirm Password"
          />
        </Input>

        <Input>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="text" name="Name" placeholder="Name" />
        </Input>
        <Input>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="date" name="Birth" placeholder="Birth" />
        </Input>
        <Btn>SIGNUP ▸</Btn>
      </LoginWrap>
    </Wrap>
  );
};
