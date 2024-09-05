import { useNavigate } from "react-router-dom";
import ss from "../Assets/Images/ss.png";
import emptyHeart from "../Assets/Images/emptyHeart.svg";
import { wstyle, mstyle, newarrival } from "../Assets/Assets";
const CommonCard = ({ classname, segment, style }) => {
  const navigate = useNavigate();
  //   console.log("segment>>", segment);
  return (
    <section
      className={`relative bg-[#fff] rounded-lg border-[1px] border-[#D1D1D1] p-3 flex flex-col justify-center ${
        classname ?? ""
      }`}
    >
      <section className="relative h-[160px]">
        <figure
          className="w-[80%] mx-auto h-full cursor-pointer"
          // onClick={() => {
          //   if (segment === "landing-page") navigate("/product-details");
          //   else navigate("/franchise360/product-details");
          // }}
          onClick={() => {
            navigate("/product-details");
          }}
        >
          <img
            src={
              style === "women" ? wstyle : style === "men" ? mstyle : newarrival
            }
            alt=""
            className="object-contain w-full h-full relative"
          />
        </figure>
        <img
          src={emptyHeart}
          alt=""
          className="object-contain w-6 h-6 absolute top-1 right-2"
        />
      </section>

      <p className="py-1.5 text-[#252525] font-semibold relative">
        {style === "women"
          ? " GULMOHAR JAIPUR Embroidered Flared Kurta"
          : style === "men"
          ? "Slim Fit Polo T-Shirt with Short Sleeves"
          : "Men Maroon Solid Polo Neck T-Shirt"}
      </p>

      <p className="py-1.5 flex items-center justify-start relative">
        <span className="text-[#252525] font-extrabold w-fit text-lg">
          ₹899
        </span>
        <strike className="text-[#707070] mx-2 text-md">₹4,499</strike>
        <span className="text-[#45A368] font-600 text-md">(80% off)</span>
      </p>
      <p className="py-1.5 flex items-center justify-center relative">
        <button
          className="text-[#FFF] py-2 px-4 font-bold bg-[#153E80] rounded-md"
          // onClick={() => {
          //   if (segment === "landing-page") navigate("product-details");
          //   else navigate("/franchise360/product-details");
          // }}
          onClick={() => {
            navigate("/product-details");
          }}
        >
          Add to Cart
        </button>
      </p>
    </section>
  );
};

export default CommonCard;
