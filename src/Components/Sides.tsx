import sideTable from "../assets/sideTable.png";
import threeSit from "../assets/threeSit.png";

const Sides = () => {
  return (
    <div className="flex justify-items-center bg-rose-100">
      <div>
        <img src={sideTable} alt="side stool" />
        <p>side table</p>
        <button className="button">View More</button>
      </div>
      <div>
        <img src={threeSit} alt="side table" />
        <p className="text-xs text-left">side table</p>
        <button className="button">View More</button>
      </div>
    </div>
  );
};

export default Sides;
