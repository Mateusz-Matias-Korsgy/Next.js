import React, { useState, useEffect } from "react";
import PricingCard from "../../components/cards/PricingCard";

const Professional = ({ data }) => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    var dat = data.filter((item) => item.category === "professional");
    const items = [];
    dat.map((item) => {
      items.push({
        id: item._id,
        header: item.title,
        category: item.category,
        body: item.description,
        price: item.cost,
      });
    });
    setCardsData(items);
  }, [data]);

  const cards = cardsData.map((card, index) => (
    <PricingCard {...card} key={index} />
  ));
  return (
    <div className="grid grid-col-1 md:grid-cols-4 gap-8 mt-8 mb-24 px-4 md:px-16">
      {cards}
    </div>
  );
};

export default Professional;
