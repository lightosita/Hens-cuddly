import Header from "../Components/Header";

import Action from "../Components/Action";
import Sides from "../Components/Sides";
import TopPicks from "../Components/TopPicks";

const Home = () => {
  return (
    <div className="bg-amber-100">
      <Header />
      <Action />
      <Sides />
      <TopPicks />
      <p>this is the home page</p>
    </div>
  );
};

export default Home;
