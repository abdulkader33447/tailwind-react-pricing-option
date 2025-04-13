import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricingCard from "../DaisyPricingCard/DaisyPricingCard";

const PricingOption = ({ PricingPromise }) => {
  const pricingData = use(PricingPromise);
  // console.log(pricingData)

  return (
    <div>
      <h2 className="text-4xl">Get our Membership</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">
        {/* {
          pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
        } */}

        {pricingData.map((pricing) => (
          <DaisyPricingCard
            key={pricing.id}
            pricing={pricing}
          ></DaisyPricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;
