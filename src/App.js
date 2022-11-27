import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Service from "./components/service/Service";
// import Faq from "./components/faq/Faq";
// import Footer from "./components/footer/Footer";

import {
  Navbar,
  Header,
  Features,
  Service,
  Faq,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      <Service />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
