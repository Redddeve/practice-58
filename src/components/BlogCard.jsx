import React from "react";

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
    <div>
      <div>
        <img src={poster} alt="card__image" />
      </div>
      <div>
        <h2>{title}</h2>
        <h3>{tag} </h3>
        <p>{description}</p>
      </div>
      <div>
        <div>
          <img src={avatar} alt="Jane Doe" />
          <div>
            <p>{name}</p>
            <p>{postedAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
