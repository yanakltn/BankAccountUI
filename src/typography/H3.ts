import styled from "styled-components";

export type Props = {
  fontSize: string;
};

const H3 = styled.p.attrs((props: Props) => ({
  fontSize: props.fontSize || "20px",
}))`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  line-height: 30px;

  letter-spacing: 0.374px;

  color: #262626;
`;

export default H3;
