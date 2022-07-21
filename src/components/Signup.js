import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Form } from "../style/Form";
import { ProfileImg } from "../style/ProfileImg";
import { Wrap } from "../style/Wrap";

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
      <Form>
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
      </Form>
    </Wrap>
  );
};
