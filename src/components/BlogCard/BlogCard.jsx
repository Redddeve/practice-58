import React from "react";
import {
  StyleAvatarDesc,
  StyleFlexBox,
  StyledAvatar,
  StyledCardBage,
  StyledCardHeader,
  StyledContainer,
  StyledImage,
  StyledImg,
  StyledWrapper,
} from "./BlogCard.styled";

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
