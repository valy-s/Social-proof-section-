import styled from "styled-components";

const CardReviewsContainer = styled.div`
  @media (min-width: 500px) {
    max-width: 60%;
    margin: 0 auto;
  }
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    padding-top: 6em;
    max-width: 80%;
    margin: 0 auto;

    & .card__review__container:nth-child(2) {
      margin-left: 2em;
    }
    & .card__review__container:nth-child(3) {
      margin-left: 4em;
    }
  }
`;

export default CardReviewsContainer;
