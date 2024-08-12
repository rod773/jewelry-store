import Header from "./components/Header/Header";
import "./App.scss";
import BannerSlider from "components/BannerSlider/BannerSlider";
import Footer from "components/Footer/Footer";
import IMAGES from "assets/img";

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSlider />
      <Footer />
    </div>
  );
}

export default App;
