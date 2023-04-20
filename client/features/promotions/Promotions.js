import React from 'react';

const promotionsData = [
  {
    id: 1,
    title: "Get 20% off your first order",
    description: "Use code WELCOME20 at checkout",
    imageUrl:
      "https://via.placeholder.com/300x200.png?text=Promotion%201",
  },
  {
    id: 2,
    title: "Free shipping on orders over $50",
    description: "No code needed. Discount applied at checkout.",
    imageUrl:
      "https://via.placeholder.com/300x200.png?text=Promotion%202",
  },
  {
    id: 3,
    title: "Buy one, get one 50% off",
    description: "Discount applied to item of equal or lesser value.",
    imageUrl:
      "https://via.placeholder.com/300x200.png?text=Promotion%203",
  },
];

const PromotionCard = ({ promotion }) => {
  return (
    <div className="card">
      <img src={promotion.imageUrl} alt={promotion.title} />
      <div className="card-body">
        <h5 className="card-title">{promotion.title}</h5>
        <p className="card-text">{promotion.description}</p>
        <a href="#" className="btn btn-primary">
          Shop now
        </a>
      </div>
    </div>
  );
};

const Promotions = () => {
  return (
    <div className="promotions">
      {promotionsData.map((promotion) => (
        <PromotionCard key={promotion.id} promotion={promotion} />
      ))}
    </div>
  );
};

export default Promotions;