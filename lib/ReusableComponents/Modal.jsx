import React, { Suspense } from "react";
import { Close } from "@mui/icons-material";

export default function Modal({
  open,
  className,
  children,
  onClose,
  size,
  bgZIndex,
  extra,
  icon,
  heading,
}) {
  let customSize;
  if (size === "xs") {
    customSize = "xl:!w-[25%] md:!w-1/2 !w-11/12";
  }
  if (size === "sm") {
    customSize = "xl:!w-[30%] md:!w-1/2 !w-11/12";
  } else if (size === "md") {
    customSize = `${extra ? "sm:!w-1/2" : ""} lg:!w-1/2 !w-11/12`;
  } else if (size === "lg") {
    customSize = "lg:!w-9/12 !w-11/12";
  } else {
    customSize = "lg:!w-1/4 !w-11/12";
  }

  return (
    <Suspense fallback={<div>Loading... </div>}>
      <section
        className={`z-[1000] fixed inset-0 flex justify-center items-center transition-colors ${bgZIndex} ${
          open ? `block bg-[#25252580]` : "hidden"
        }`}
      >
        {open ? (
          <section
            className={`bg-white p-8 rounded-xl shadow overflow-hidden transition-all ${
              open ? "scale-100 opacity-100" : "scale-125 opacity-100"
            } ${customSize} ${className} ${
              open ? "bsw-modal-animate-slide-up" : ""
            }`}
          >
            {icon || heading ? (
              <main className="relative flex justify-between">
                <div className="flex items-center">
                  {icon ? (
                    <img src={icon} alt="" className="w-[22px] h-[22px]" />
                  ) : null}
                  {heading ? (
                    <h4 className="text-[#252525] text-start font-semibold">
                      {heading}
                    </h4>
                  ) : null}
                </div>
                <figure
                  onClick={onClose}
                  className="bg-fourth  shadow-lg border z-10  rounded-full p-1  group cursor-pointer w-[30px] h-[30px] flex justify-center items-center"
                >
                  <Close
                    style={{ fontSize: "24px" }}
                    className="flex justify-center items-center text-[#4C98F5] rounded-full p-[2.5px]"
                  />
                </figure>
              </main>
            ) : (
              <main className="relative">
                <figure
                  onClick={onClose}
                  className="bg-fourth  absolute right-0 top-0 shadow-lg border z-10  rounded-full p-1  group cursor-pointer w-[30px] h-[30px] flex justify-center items-center"
                >
                  <Close
                    style={{ fontSize: "24px" }}
                    className="flex justify-center items-center text-[#4C98F5] rounded-full p-[2.5px]"
                  />
                </figure>
              </main>
            )}
            <section>{children}</section>
          </section>
        ) : null}
      </section>
    </Suspense>
  );
}
