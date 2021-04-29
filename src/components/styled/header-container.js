import styled from "styled-components";

const HeaderContainer = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1440px;
    width: 90vw;
    margin: 0 auto;
  }
`;

export default HeaderContainer;
