import dining from "../assets/dining.png";
import sofa from "../assets/sofa.png";
import mirror from "../assets/mirror.png";
import bar from "../assets/bar.png";

const TopPicks = () => {
  return (
    <div className="bg-white">
      <h3 className="text-center font-bold">Top Picks For You</h3>
      <p className="text-center">
        <small>
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </small>
      </p>
      <div className="flex items-baseline justify-between">
        <div className="justify-center items-center">
          <img src={sofa} alt="dining chairs" />
          <p className="b-0">
            <small>Trenton modular sofa_3</small>
          </p>
          <p className="">
            <strong>Rp 2.500.000</strong>
          </p>
        </div>
        <div>
          <img src={dining} alt="granite sofa" />
          <p className="">
            <small>Granite dining table with dining chair</small>
          </p>
          <p className="">
            <strong>Rp 2.500.000</strong>
          </p>
        </div>
        <div>
          <img src={bar} alt="" />
          <p className=" text-base">
            <small>Outdoor bar table and stool</small>
          </p>
          <p className="">
            <strong>Rp 2.500.000</strong>
          </p>
        </div>
        <div>
          <img src={mirror} alt="" />
          <p className="">
            <small>Plain console with teak mirror</small>
          </p>
          <p className="">
            <strong>Rp 2.500.000</strong>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="button">View More</button>
      </div>
    </div>
  );
};

export default TopPicks;
