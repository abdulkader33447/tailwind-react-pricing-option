import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingFeature = ({feature}) => {
  return (
    <div>
      <p className='flex gap-2 mt-4'><CircleCheckBig />{feature}</p>
    </div>
  );
};

export default PricingFeature;