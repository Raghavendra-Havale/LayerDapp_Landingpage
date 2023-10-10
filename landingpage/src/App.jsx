import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DefiStrategies from "./components/DefiStrategies";
import TopVaults from "./components/TopVaults";
import Community from "./components/Community";
import Ecosystem from "./components/Ecosystem";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <DefiStrategies />
        <TopVaults />
        <Community />
        <Ecosystem />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}

export default App;
