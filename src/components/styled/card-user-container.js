import styled from "styled-components";

const CardUsersContainer = styled.div`
  padding: 3em 0;
  position: relative;
  @media (min-width: 500px) {
    max-width: 80%;
    margin: 0 auto;
  }
  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    max-width: 90vw;
    margin: 0 auto;

    & .card__user__container:nth-child(2) {
      margin-left: 1em;
      position: relative;
      top: 1em;
    }
    & .card__user__container:nth-child(3) {
      margin-left: 1em;
      position: relative;
      top: 2em;
    }
  }
`;

export default CardUsersContainer;
