import styled from "@emotion/styled";

const Divider = styled.div`
  background-image: linear-gradient(
    to right,
    ${props => props.color} 52%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: top;
  background-size: 19px 3px;
  background-repeat: repeat-x;
  width: 100%;
  height: 5px;
  margin: 16px 0;
`;

export default Divider;
