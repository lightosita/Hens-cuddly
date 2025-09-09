import Rec13 from "../assets/Rec13.png";
import Rec14 from "../assets/Rec14.png";
import Rec15 from "../assets/Rec15.png";

const Blog = () => {
  return (
    <div>
      <div className=" flex items-center justify-center">
        <h2>Our Blog</h2>
        <p>Find a bright ideal to suit your taste with our great selection</p>
      </div>
      <div className="flex justify-around">
        <div>
          <img src={Rec13} alt="" />
          <p className="b-0">
            <small>Going all-in with millennial design</small>
          </p>
          <button className="button">Read More</button>
          <div className="blog_base">
            <p>time</p>
            <p>calender</p>
          </div>
        </div>
        <div>
          <img src={Rec14} alt="" />
          <p className="b-0">
            <small>Going all-in with millennial design</small>
          </p>
          <button className="button">Read More</button>
          <div className="blog_base">
            <p>time</p>
            <p>calender</p>
          </div>
        </div>
        <div>
          <img src={Rec15} alt="" />
          <p className="b-0">
            <small>Going all-in with millennial design</small>
          </p>
          <button className="button">Read More</button>
          <div className="blog_base">
            <p>time</p>
            <p>calender</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-4 py-4">
        <button className="button">View All Posts</button>
      </div>
    </div>
  );
};

export default Blog;
