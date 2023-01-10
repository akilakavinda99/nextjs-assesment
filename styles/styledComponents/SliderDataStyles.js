import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 50px;
  padding-right: 230px;
  width: 100%;

  height: 400px;
  border-radius: 10px;
  background: radial-gradient(
    circle,
    rgba(55, 77, 83, 1) 35%,
    rgba(22, 40, 44, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
`;
export const Heading = styled.h2`
  padding-top: 20px;
  color: white;
`;
export const Details = styled.p`
  color: white;
  width: 400px;
`;

export const ImageDiv = styled.div`
  height: 370px;
  width: 550px;
  box-shadow:  background: rgba(0, 0, 0, 0.5) 0px 7px 59px 0px;
`;
export const Image = styled.img`
  padding-top: 30px;
  height: 370px;
  width: 550px;
  box-shadow:  background: rgba(0, 0, 0, 0.5) 0px 7px 29px 0px;
`;
