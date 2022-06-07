import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Leo } from "./leo.svg";
import { ReactComponent as Monica } from "./monica.svg";

const Caption = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.374px;
  color: #b5b5b5;
  margin: 0;
  margin-bottom: 1em;
`;
const Layout = styled.div`
  margin-top: 3em;
  margin-bottom: 5em;
`;

const SendMoney = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.374px;
  margin-top: 0.5em;
`;

const Button = styled(Link)`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border: 1px solid #fd3a6c;
  border-radius: 30px;
  padding: 2em 1.5em 1em;
  color: #fd3a6c;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    margin-right: 1em;
  }
`;

const ImgWrapper = styled.div`
  background: #f8f8f8;
  border-radius: 30px;
  padding: 1em 1em 0.5em;
`;

const ImgCaption = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.374px;
  color: #262626;
  margin: 0;
`;
function SectionQuickTransaction() {
  return (
    <Layout>
      <Caption>Quick Transaction</Caption>
      <Wrapper>
        <Button to="/send">
          <FontAwesomeIcon icon={faPaperPlane} size={"lg"} />
          <SendMoney>
            Send
            <br />
            Money
          </SendMoney>
        </Button>
        <ImgWrapper>
          <Leo />
          <ImgCaption>Leo W.</ImgCaption>
        </ImgWrapper>
        <ImgWrapper>
          <Monica />
          <ImgCaption>Monica L.</ImgCaption>
        </ImgWrapper>
      </Wrapper>
    </Layout>
  );
}

export default SectionQuickTransaction;
