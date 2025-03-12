import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/LandingPage/Hero";
import Services from "./components/LandingPage/Services/Services";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="pattern" />
        <Navbar />
        <Hero />
        <Services />
      </div>
    </>
  );
}

export default App;
