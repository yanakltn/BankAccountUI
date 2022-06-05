import styled from "styled-components";

export type Props = {
  fontSize: string;
};

const P = styled.p.attrs((props: Props) => ({
  fontSize: props.fontSize || "16px",
}))`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  line-height: 24px;

  letter-spacing: 0.374px;

  color: #262626;
`;

export default P;
