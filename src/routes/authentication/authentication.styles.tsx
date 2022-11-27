import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  justify-content: space-around;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
