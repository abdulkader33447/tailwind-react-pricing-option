import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOption = ({PricingPromise}) => {

const pricingData = use(PricingPromise);
// console.log(pricingData)


  return (
    <div>
      <h2 className='text-4xl'>Get our Membership</h2>
      <div className='grid md:grid-cols-3 gap-7'>
        {
          pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
        }
      </div>
    </div>
  );
};

export default PricingOption;