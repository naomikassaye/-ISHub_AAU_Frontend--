import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#testimonial", label: "Testimonial" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      <Header links={links} />
      <Home />
      <About />
      <Testimonial /> {}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
