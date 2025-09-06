import Header from "../Components/Header";

import Action from "../Components/Action";
import Sides from "../Components/Sides";
import TopPicks from "../Components/TopPicks";
import Sofa from "../Components/sofa";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="bg-amber-100">
      <Header />
      <Action />
      <Sides />
      <TopPicks />
      <Sofa />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
