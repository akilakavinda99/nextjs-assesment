import styled from "styled-components";

export const NavBarWrapper = styled.div`
  width: 100%;
  height: 90px;
  background-color: #374d53;
  padding: 25px 10px 15px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const LogoImage = styled.img`
  width: 60px;
  height: 60px;
`;
export const LogoText = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 25px;
  padding-top: 25px;
`;
export const LogoText1 = styled.div`
  font-weight: bold;
  color: white;
`;
export const LogoText2 = styled.div`
  color: white;
`;
