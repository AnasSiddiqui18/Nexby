import { FAQ } from "./components/app/faq";
import { Features } from "./components/app/features";
import { Footer } from "./components/app/footer";
import { Header } from "./components/app/header";
import { Hero } from "./components/app/hero";
import { HowItWorks } from "./components/app/how-it-works";
import { Industries } from "./components/app/industries";
import { Platform } from "./components/app/platform";
import { Pricing } from "./components/app/pricing";
import { Register } from "./components/app/register";
import { Success } from "./components/app/success";
import { Superior } from "./components/app/superior";

function App() {
  return (
    <div className="bg-dark-100 min-h-screen pt-5">
      <Header />
      <Hero />
      <Register />
      <Superior />
      <Platform />
      <Industries />
      <HowItWorks />
      <Features />
      <Success />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
