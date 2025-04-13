import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./assets/component/DaisyNav";
import NavBar from "./assets/component/NavBar/NavBar";
import PricingOption from "./assets/component/PricingOption/PricingOption";
import DaisyPricingCard from "./assets/component/DaisyPricingCard/DaisyPricingCard";


const PricingPromise = fetch('pricing.json')
.then(res => res.json()
// .then(data => console.log(data))
)

function App() {
  return (
    <>
      <header className="w-10/12 mx-auto">
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main className="w-10/12 mx-auto">
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOption PricingPromise={PricingPromise}></PricingOption>
        </Suspense>
      </main>
    </>
  );
}

export default App;
