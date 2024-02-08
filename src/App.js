import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Project from "./components/projects/./Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/Home":
      component = <Home />;
      break;
    case "/About":
      component = <About />;
      break;
    case "/Projects":
      component = <Project />;
      break;
    case "/Experience":
      component = <Experience />;
      break;
    case "/Contact":
      component = <Contact />;
      break;
    case "/Footer":
      component = <Footer />;
      break;
    default:
      component = <Home />;
  }

  return (
      <>
        <Navbar />
        <div className="container">{component}</div>

      </>
  );
}

export default App;
