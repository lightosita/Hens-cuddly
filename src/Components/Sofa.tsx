import sofa1 from "../assets/sofa1.png";

const Sofa = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img src={sofa1} alt="Asgaard new sofa" />
      </div>
      <div className="items-center justify-center">
        <p> New Arrivals</p>
        <h2 className="font-extrabold">Asgaard sofa</h2>
        <button className=" border-1 text-center py-2 px-10">Order Now</button>
      </div>
    </div>
  );
};

export default Sofa;
