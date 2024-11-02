import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";

const Wrap = styled.div`
  width: 100%;
  height: 180px;
  background-color: #141414;
  color: #fff;
  margin-top: 20px;
  padding: 20px ${mainStyle.pcPadding};
  /* margin: 0 auto; */
  @media screen and (max-width: 450px) {
    padding: 0 ${mainStyle.moPadding};
  }
`;

const IconBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  font-size: 18px;
`;

const TextCon = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  all: unset;
  width: 85px;
  height: 25px;
  border: 1px solid #fff;
  margin-top: 30px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const Footer = () => {
  return (
    <Wrap>
      <IconBox>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faYoutube} />
      </IconBox>
      <TextCon>
        <p>FAQ</p>
        <p>Help Center</p>
        <p>Account</p>
        <p>Media Center</p>
        <p>Investor relations</p>
        <p>Jobs</p>
        <p>Nexflix Shop</p>
        <p>Redeem gift card</p>
      </TextCon>
      <Button>
        English
        <span>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </Button>
    </Wrap>
  );
};

export default Footer;
