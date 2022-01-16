import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Harika konumlara göz at!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../../images/img-9.jpg")}
              text="Amazon Ormanı'nın derinliklerindeki gizli şelaleyi keşfedin"
              label="Macera"
              path="/services"
            />
            <CardItem
              src={require("../../images/img-2.jpg")}
              text="Özel Bir Yolculukta Bali Adasında Seyahat Edin"
              label="Lüks"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../../images/img-3.jpg")}
              text="Uncharted Waters'ı ziyaret ederek Atlantik Okyanusu'nda Yelken Açın"
              label='Gizem'
              path='/services'
            />
            <CardItem
              src={require("../../images/img-4.jpg")}
              text='Himalaya Dağlarının Zirvesinde Futbolu Deneyimleyin'
              label='Macera'
              path='/products'
            />
            <CardItem
              src={require("../../images/img-8.jpg")}
              text="Rehberli bir deve turunda Sahra Çölü'nde gezinin"
              label='Adrenalin'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
