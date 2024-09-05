import { useNavigate } from "react-router-dom";
import { sbanner1 } from "../Assets/Assets";
const BannerCard = ({ classname }) => {
  const navigate = useNavigate();

  return (
    <section
      className={`relative bg-[#fff] rounded-lg border-[1px] border-[#D1D1D1] flex flex-col justify-center ${
        classname ?? ""
      }`}
    >
      <figure className="w-full h-full relative">
        <img
          src={sbanner1}
          alt=""
          className="object-contain w-full h-full relative"
        />
      </figure>
      <button className="bg-white rounded-2xl w-fit px-2 py-1 absolute bottom-3 left-2.5 text-sm">
        Order Now
      </button>
    </section>
  );
};

export default BannerCard;
