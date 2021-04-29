import React from "react";
import ColtonImg from "../images/image-colton.jpg";
import AnneImg from "../images/image-anne.jpg";
import IreneImg from "../images/image-irene.jpg";
import CardUsersContainer from "./styled/card-user-container.js";
import CardUser from "./cards-user/card-user.js";

const usersInfo = {
  colton: {
    name: "Colton Smith",
    text:
      "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
  irene: {
    name: "Irene Roberts",
    text:
      "Customer serviceis always excellent an very quickturn around. Completely delighted with the simplicity of the purchase and the apeed of delivery.",
  },
  anne: {
    name: "Anne Wallace",
    text:
      "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
  },
};

function UserSection() {
  return (
    <CardUsersContainer>
      <CardUser
        image={ColtonImg}
        name={usersInfo.colton.name}
        text={usersInfo.colton.text}
      />
      <CardUser
        image={IreneImg}
        name={usersInfo.irene.name}
        text={usersInfo.irene.text}
      />
      <CardUser
        image={AnneImg}
        name={usersInfo.anne.name}
        text={usersInfo.anne.text}
      />
    </CardUsersContainer>
  );
}

export default UserSection;
