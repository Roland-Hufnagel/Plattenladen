import Image from "next/image";
import styled from "styled-components";
import AddButton from "./AddButton";

export default function Card({ article, handleAdd }) {
  return (
    <li>
      <StyledArticle>
        <Image
          src={article.img}
          width={200}
          height={200}
          alt={article.name}
          style={{ objectFit: "cover" }}
        />
        <div>
          <h2>{article.name}</h2>
          <p>{article.year}</p>
          <p>{article.price} €</p>
        </div>
        <AddButton handleAdd={()=>handleAdd(article.id)}/>
      </StyledArticle>
    </li>
  );
}
const StyledArticle = styled.article`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  display: flex;
  gap: 1rem;
  position: relative;
`;
