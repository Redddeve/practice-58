import React from "react";
import { styled } from "styled-components";

export const BlogCard = ({
  poster,
  title,
  tag,
  avatar,
  name,
  postedAt,
  description,
}) => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledImage>
          <StyledImg src={poster} alt="card__image" />
        </StyledImage>
        <StyledCardHeader>
          <StyledCardBage>{tag} </StyledCardBage>
          <h2>{title}</h2>
          <p>{description}</p>
        </StyledCardHeader>
        <div>
          <StyleFlexBox>
            <StyledAvatar src={avatar} alt="Jane Doe" />
            <div>
              <StyleAvatarDesc>{name}</StyleAvatarDesc>
              <p>{postedAt}</p>
            </div>
          </StyleFlexBox>
        </div>
      </StyledWrapper>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  display: grid;
  min-height: 100vh;
  place-content: center;
  /* background-color: gray; */
`;
const StyledWrapper = styled.div`
  width: ${(props) => props.theme.spacing(100)};

  border-radius: 10px;
  box-shadow: 0 0 4px 8px gray;
  overflow: hidden;
`;
const StyledImage = styled.div`
  height: ${(props) => props.theme.spacing(50)};
  overflow: hidden;
`;
const StyledImg = styled.img`
  display: block;

  object-fit: cover;
  width: 100%;
`;
const StyledCardHeader = styled.div`
  padding: ${(props) => props.theme.spacing(2)}
    ${(props) => props.theme.spacing(3)};
`;
const StyledCardBage = styled.h3`
  display: inline-block;
  padding: 8px 10px;
  border-radius: 20px;
  color: white;
  background: linear-gradient(to bottom, #ffd194, #d1913c);
`;
const StyledAvatar = styled.img`
  display: block;
  border-radius: 50%;
`;
const StyleFlexBox = styled.div`
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
const StyleAvatarDesc = styled.div`
  font-weight: bold;
`;
