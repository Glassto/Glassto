import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/LandingPage/Hero";
import Services from "./components/LandingPage/Services/Services";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="wrapper">
      <div className="pattern" />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
