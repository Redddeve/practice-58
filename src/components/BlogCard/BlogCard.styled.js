import { styled } from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  min-height: 100vh;
  place-content: center;
  /* background-color: gray; */
`;
export const StyledWrapper = styled.div`
  width: ${(props) => props.theme.spacing(100)};

  border-radius: 10px;
  box-shadow: 0 0 4px 8px gray;
  overflow: hidden;
  background-color: #fff;
`;
export const StyledImage = styled.div`
  height: ${(props) => props.theme.spacing(50)};
  overflow: hidden;
`;
export const StyledImg = styled.img`
  display: block;

  object-fit: cover;
  width: 100%;
`;
export const StyledCardHeader = styled.div`
  padding: ${(props) => props.theme.spacing(2)}
    ${(props) => props.theme.spacing(3)};
`;
export const StyledCardBage = styled.h3`
  display: inline-block;
  padding: 8px 10px;
  border-radius: 20px;
  color: white;
  background: linear-gradient(to bottom, #ffd194, #d1913c);
`;
export const StyledAvatar = styled.img`
  display: block;
  border-radius: 50%;
`;
export const StyleFlexBox = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  /* align-items: center; */
  padding-left: 10px;
  padding-bottom: 15px;
  & div {
    & p {
      margin: 0;
    }
  }
`;
export const StyleAvatarDesc = styled.div`
  font-weight: bold;
`;
