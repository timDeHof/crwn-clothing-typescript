import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 325px){
    grid-template-columns: 1fr;
    justify-items: center;
  }
    &:last-child {
      margin-bottom: 20px;
    }
`;

export const CategoryTitle = styled.div`
  font-size: 38px;
  text-align: center;
  margin-bottom: 25px;
`;
