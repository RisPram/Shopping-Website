import { useNavigate } from "react-router-dom";
import arrow from "../Assets/Images/ArrowLeft.svg";

const CommonSubHeading = ({ text, link }) => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F1F5F6] flex items-center justify-between p-3 my-4 rounded-[10px]">
      <h4 className="text-[#252525] font-bold">{text}</h4>

      {link && (
        <p>
          <button
            className="flex items-center justify-center text-[#252525]"
            onClick={() => {
              navigate(`${link}`);
            }}
          >
            View All
            <img src={arrow} className="w-3 h-3 ml-2" />
          </button>
        </p>
      )}
    </section>
  );
};

export default CommonSubHeading;
