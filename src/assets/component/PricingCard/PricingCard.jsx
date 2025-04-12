import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  // console.log(pricing);
  const {name,price,description,features} = pricing;

  return (
    <div className=" border bg-amber-600 rounded-2xl p-4">
      {/* card header */}
      <div>
        <h1 className="text-6xl">{name}</h1>
        <h4 className="text-4xl">{price}</h4>
      </div>
      {/* card body */}
      <div className="mt-5 bg-amber-300 rounded-2xl p-2 ">
        <p className="mb-5">{description}</p>
        {
          features.map((feature,index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
        }
      </div>
    </div>
  );
};

export default PricingCard;
