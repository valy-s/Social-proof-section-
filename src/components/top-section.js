import React from "react";
import Header from "./header/header.js";
import CardReview from "./cards-reviews/card-review.js";
import HeaderContainer from "./styled/header-container.js";
import CardReviewsContainer from "./styled/card-reviews-container.js";

function TopSection() {
  return (
    <HeaderContainer>
      <Header />
      <CardReviewsContainer>
        <CardReview text="Rated 5 Stars in Reviews" />
        <CardReview text="Rated 5 Stars in ReportGuru" />
        <CardReview text="Rated 5 Stars in BestTech" />
      </CardReviewsContainer>
    </HeaderContainer>
  );
}

export default TopSection;
