import singleSitter from "../assets/singleSitter.png";

const Action = () => {
  return (
    <div className=" flex items-center bg-amber-100">
      <div className="text-black text-center  ">
        <h1>Rocket single seater</h1>
        <button className="button">Shop Now</button>
      </div>
      <div>
        <img src={singleSitter} alt="Rocket single sitter" />
      </div>
    </div>
  );
};

export default Action;
