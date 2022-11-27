import styled from "styled-components";

import  Button  from "../button/button.component" 

type BackgroundImageProps = {
  imageUrl: string;
}

export const ProductCardContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8
    }
  
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  
  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      img {
      opacity: unset;
      }
      button {
      opacity: unset;
      }
    }
  }
  @media screen and (max-width: 325px){
    width: 75vw;
    align-self: center;;
  }
`;

export const AddButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
  
  @media screen and (max-width: 400px) {
    padding: 0;
  }
`

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;


export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const Name = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;
export const Price = styled.div`
  width: 10%;
`;
