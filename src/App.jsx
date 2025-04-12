import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./assets/component/DaisyNav";
import NavBar from "./assets/component/NavBar/NavBar";
import PricingOption from "./assets/component/PricingOption/PricingOption";


const PricingPromise = fetch('pricing.json')
.then(res => res.json()
// .then(data => console.log(data))
)

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOption PricingPromise={PricingPromise}></PricingOption>
        </Suspense>
      </main>
    </>
  );
}

export default App;
