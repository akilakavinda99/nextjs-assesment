import styled from "styled-components";

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 210px;
  margin-top: 20px;
`;

export const Dots = styled.span`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  background-color: ${(props) => (props.active ? "black" : "#bbb")};
  border-radius: 50%;
  display: inline-block;
`;
