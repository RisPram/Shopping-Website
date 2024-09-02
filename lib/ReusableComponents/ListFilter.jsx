import { useState, useRef, useCallback, useEffect } from "react";
import {
  checkImage,
  unCheckImage,
  coloredCircle,
  unColoredCircle,
} from "../Assets/Assets";
// import { IoCloseSharp, IoSearch, IoAdd, IoRemove } from "react-icons/io5";
// import { MdSwapVert, MdKeyboardArrowRight } from "react-icons/md";
import {
  Close,
  SearchRounded,
  // ExpandMore,
  SwapVertSharp,
  KeyboardArrowRight,
  Add,
  Remove,
} from "@mui/icons-material";
import Container from "./Container";
// import NoDataFound from "Components/BasicComponents/NoDataFound";
// import OndcCommonCard from "./CommonCard";
import { category, seller, productDiscount, productPrice } from "../DummyData";
import OndcCommonCard from "./Card";

const CommonListFilter = () => {
  const [state, setState] = useState({
    brandSearch: "",
    openArrow: false,
    selectedSortBy: null,
    selectedCategoryId: "",
    selectedCategorySubOption: "",
    openSubOptions: false,
    selectedSeller: [],
    selectedPrice: [],
    selectedDiscount: [],
    filterQuery: {
      filter: {
        category: "",
        seller: "",
        price: "",
        discount: "",
        sort: "",
      },
    },
    pageNumber: 1,
  });

  let selected_Seller = useRef({ values: [] });
  let selected_Price = useRef({ values: [] });
  let selected_Discount = useRef({ values: [] });

  const allBrands = [1, 1, 1, 1, 1, 1, 1],
    // lastBrandElementRef = false,
    loading = false;
  //for sorting starts here
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const optionsBlockRef = useRef();

  const handleClickOutside = (event) => {
    if (!optionsBlockRef.current?.contains(event.target)) {
      setState((prev) => {
        return { ...prev, openArrow: false };
      });
    }

    // console.log("optionsBlockRef.current>>", optionsBlockRef.current);
    // console.log("event.target>>", event.target);
  };

  const handleSort = (data) => {
    setState((prev) => {
      return {
        ...prev,
        selectedSortBy: data,
        pageNumber: 1,
        filterQuery: {
          filter: {
            ...prev.filterQuery.filter,
            sort: data,
          },
        },
        openArrow: false,
      };
    });
  };
  //for sorting ends here
  // for search
  //debouncing search brand functionality
  const debounce = (callback, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), delay);
    };
  };

  const debouncedLog = useCallback(
    debounce((text) => {
      setState((prev) => {
        return {
          ...prev,
          pageNumber: 1,
          filterQuery: {
            filter: {
              ...prev.filterQuery.filter,
              name: text,
            },
          },
        };
      });
    }, 2000),
    []
  );
  const handleSearchBrand = (e) => {
    setState((prev) => {
      return {
        ...prev,
        brandSearch: e ? e.target.value : "",
      };
    });
    debouncedLog(e ? e.target.value : "");
  };
  // for search ends here

  const handleCategoryId = (data) => {
    setState((prev) => {
      return {
        ...prev,
        selectedCategoryId: data,
        openSubOptions: data ? true : false,
      };
    });
  };

  const handleSeller = (data) => {
    if (!selected_Seller.current.values?.includes(data)) {
      selected_Seller.current.values.push(data);
    } else {
      let valueToRemove = data;
      selected_Seller.current.values = selected_Seller.current.values?.filter(
        (a) => {
          return a !== valueToRemove;
        }
      );
    }
    setState((prev) => {
      return { ...prev, selectedSeller: selected_Seller.current.values };
    });
  };

  const handlePrice = (data) => {
    if (!selected_Price.current.values?.includes(data)) {
      selected_Price.current.values.push(data);
    } else {
      let valueToRemove = data;
      selected_Price.current.values = selected_Price.current.values?.filter(
        (a) => {
          return a !== valueToRemove;
        }
      );
    }
    setState((prev) => {
      return { ...prev, selectedPrice: selected_Price.current.values };
    });
  };
  const handleDiscount = (data) => {
    if (!selected_Discount.current.values?.includes(data)) {
      selected_Discount.current.values.push(data);
    } else {
      let valueToRemove = data;
      selected_Discount.current.values =
        selected_Discount.current.values?.filter((a) => {
          return a !== valueToRemove;
        });
    }
    setState((prev) => {
      return { ...prev, selectedDiscount: selected_Discount.current.values };
    });
  };
  let sub_suboption =
    category?.filter((a) => a.id === state.selectedCategoryId) ?? [];
  return (
    <Container classname1="my-14 py-4 bg-[#F1F5F6]">
      {/* category + searching + sorting + list */}
      {/* note 768px-md is the breakpoint for design change */}
      <section className="grid grid-cols-1 md:grid-cols-[29%_69%] gap-[2%]">
        {/* left */}

        <section className="text-[#252525] rounded-lg p-3 hidden md:flex flex-col sticky top-[100px]">
          <h5 className="!py-1 md:!py-3 flex items-center justify-start">
            Showing <strong className="mx-1.5"> 47 </strong> products
          </h5>
          <section className="my-4">
            <p className="my-2 py-2 font-semibold flex items-center justify-between rounded-lg p-3 bg-white">
              <span className="font-bold text-lg">Filters</span>
              <span className="text-[#CB3A3A]">Clear All</span>
            </p>

            {/* for category */}
            <section className="my-4 rounded-lg p-3 bg-white">
              <p className="flex items-center justify-between py-2 border-b-[1px] border-gray-200">
                <span className="font-bold">Category</span>
                <span className="">
                  <KeyboardArrowRight className="rotate-90" />
                </span>
              </p>
              {category?.map((d, i) => {
                return (
                  <div key={i}>
                    <p className="flex items-center justify-between py-2">
                      <span className="font-semibold">{d?.option}</span>

                      {state?.selectedCategoryId === d?.id &&
                      state.openSubOptions ? (
                        <Remove
                          className="cursor-pointer"
                          onClick={() => {
                            handleCategoryId("");
                          }}
                        />
                      ) : (
                        <Add
                          className="cursor-pointer"
                          onClick={() => {
                            handleCategoryId(d?.id);
                          }}
                        />
                      )}
                    </p>
                    {state?.selectedCategoryId === d?.id &&
                    state.openSubOptions ? (
                      <div className="flex flex-col items-start">
                        {sub_suboption[0]?.subOptions?.map((d, k) => {
                          return (
                            <p
                              className={`w-full py-2 px-3  cursor-pointer ${
                                state.selectedCategorySubOption === d
                                  ? "bg-cyan-50 "
                                  : ""
                              }`}
                              key={k}
                              onClick={() => {
                                setState((prev) => {
                                  return {
                                    ...prev,
                                    selectedCategorySubOption: d,
                                  };
                                });
                              }}
                            >
                              {d}
                            </p>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </section>

            {/* for seller name */}
            <section className="my-4 rounded-lg p-3 bg-white">
              <p className="flex items-center justify-between py-2 border-b-[1px] border-gray-200">
                <span className="font-bold">Seller name</span>
                <span className="">
                  <KeyboardArrowRight className="rotate-90" />
                </span>
              </p>
              {seller?.map((d, i) => {
                return (
                  <div
                    className="w-full py-2 grid grid-cols-[6%_84%_10%]"
                    key={i}
                  >
                    <p className="flex items-center justify-start">
                      {/* <img src={unCheckImage} alt="" className="w-4 h-4 cursor-pointer" /> */}
                      <img
                        src={
                          state.selectedSeller?.includes(d)
                            ? checkImage
                            : unCheckImage
                        }
                        alt=""
                        className="w-4 h-4 cursor-pointer"
                        onClick={() => {
                          handleSeller(d);
                        }}
                      />
                    </p>
                    <p className="font-semibold">{d}</p>
                    <p className="flex justify-end">(25)</p>
                  </div>
                );
              })}
            </section>

            {/* for price */}

            <section className="my-4 rounded-lg p-3 bg-white">
              <p className="flex items-center justify-between py-2 border-b-[1px] border-gray-200">
                <span className="font-bold">Price</span>
                <span className="">
                  <KeyboardArrowRight className="rotate-90" />
                </span>
              </p>
              {productPrice?.map((d, i) => {
                return (
                  <div
                    className="w-full py-2 grid grid-cols-[6%_84%_10%]"
                    key={i}
                  >
                    <p className="flex items-center justify-start">
                      {/* <img src={unCheckImage} alt="" className="w-4 h-4 cursor-pointer" /> */}
                      <img
                        src={
                          state.selectedPrice?.includes(d)
                            ? coloredCircle
                            : unColoredCircle
                        }
                        alt=""
                        className="w-4 h-4 cursor-pointer"
                        onClick={() => {
                          handlePrice(d);
                        }}
                      />
                    </p>
                    <p className="font-semibold">{d}</p>
                    <p className="flex justify-end">(25)</p>
                  </div>
                );
              })}
            </section>

            {/* for discount */}

            <section className="my-4 rounded-lg p-3 bg-white">
              <p className="flex items-center justify-between py-2 border-b-[1px] border-gray-200">
                <span className="font-bold">Discount</span>
                <span className="">
                  <KeyboardArrowRight className="rotate-90" />
                </span>
              </p>
              {productDiscount?.map((d, i) => {
                return (
                  <div
                    className="w-full py-2 grid grid-cols-[6%_84%_10%]"
                    key={i}
                  >
                    <p className="flex items-center justify-start">
                      {/* <img src={unCheckImage} alt="" className="w-4 h-4 cursor-pointer" /> */}
                      <img
                        src={
                          state.selectedDiscount?.includes(d)
                            ? coloredCircle
                            : unColoredCircle
                        }
                        alt=""
                        className="w-4 h-4 cursor-pointer"
                        onClick={() => {
                          handleDiscount(d);
                        }}
                      />
                    </p>
                    <p className="font-semibold">{d}</p>
                    <p className="flex justify-end">(25)</p>
                  </div>
                );
              })}
            </section>
          </section>
        </section>

        {/* right */}
        <section className="flex flex-col ">
          {/*part1: search+sort */}

          <section className="!p-1 md:!p-3 w-full rounded-lg bg-white grid grid-cols-[78.5%_12.5%] md:grid-cols-[50%_40%] xl:grid-cols-[65%_25%] gap-[10%]">
            {/* search */}
            <section className="flex items-center rounded-full border-2 border-gray-200 pl-2 pr-4">
              <SearchRounded className="text-[#707070] " />
              <input
                value={state?.brandSearch}
                type="text"
                placeholder="Search"
                className="p-2 outline-none w-[100%]"
                onChange={(e) => handleSearchBrand(e)}
              />
              {state?.brandSearch?.length > 0 && (
                <Close
                  className="cursor-pointer"
                  onClick={() =>
                    //  handleSearchBrand()
                    setState((prev) => {
                      return {
                        ...prev,
                        brandSearch: "",
                        pageNumber: 1,
                        filterQuery: {
                          filter: {
                            ...prev.filterQuery.filter,
                            name: "",
                          },
                        },
                      };
                    })
                  }
                />
              )}
            </section>
            {/* responsive filter-- below md */}
            <section className="md:hidden rounded flex justify-end items-center mr-2">
              <section
                className="w-max p-2 bg-[#F4F4F4] cursor-pointer rounded"
                onClick={() => {
                  //   handleFilterModal(true);
                }}
              >
                <img
                  src="https://beta.globalgarner.com/static/media/mg-filter.3894413175753acca8ce202d7110689c.svg"
                  alt="filter"
                  className="w-6 h-6 object-contain"
                />
              </section>
            </section>
            {/* sort */}
            <section
              ref={optionsBlockRef}
              className="hidden md:flex flex-col justify-end items-end relative w-full "
              onClick={() => {
                setState((prev) => {
                  return {
                    ...prev,
                    openArrow: !state.openArrow,
                  };
                });
              }}
            >
              <section className="border-2 border-gray-200 relative h-full flex items-center justify-center py-1 rounded-full w-[70%] cursor-pointer px-1">
                <span className="py-2 px-1 text-[#252525]">Sort By</span>
                {/* <ExpandMore
                  className={`${
                    state.openArrow
                      ? "rotate-180 animate-arrowRotateClock"
                      : "rotate-0 animate-arrowRotateAntiClock"
                  }  text-[#707070]`}
                /> */}
                <SwapVertSharp className="text-[#252525] p-[1px] rounded-full border-[1px] border-[#252525] w-4 h-4" />
              </section>
              {/* dropdown part */}
              {state.openArrow && (
                <section
                  className={`my-2 absolute top-12 flex flex-col text-left w-[100%] rounded-lg border-[1px] !z-10 border-gray-100 bg-white h-fit`}
                >
                  {["Low to High", "High to Low"]?.map((d, i) => {
                    return (
                      <div
                        key={i}
                        className={`w-full px-3 py-2 cursor-pointer flex items-center justify-center hover:bg-[#F1F5F6] border-b-[1px] border-gray-100 gap-2
                              ${
                                state.selectedSortBy === d ? "bg-[#e5e5e5]" : ""
                              }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSort(d);
                        }}
                      >
                        <p
                          className={`text-[#252525]
                          
                            `}
                        >
                          {d}
                        </p>
                      </div>
                    );
                  })}
                </section>
              )}
            </section>
          </section>
          {/* part2:listing cards */}
          <section className="my-4 bg-[#F4F4F4] rounded-lg">
            {allBrands?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {allBrands?.map((brand, index) => {
                  return (
                    <div key={index}>
                      {allBrands?.length === index + 1 ? (
                        // <div ref={lastBrandElementRef}>
                        <div>
                          <OndcCommonCard />
                          {/* <CategoryBrandCard
                            brand={brand}
                            allBrands={allBrands}
                            {...props}
                          /> */}
                        </div>
                      ) : (
                        <div>
                          {/* <CategoryBrandCard
                            brand={brand}
                            allBrands={allBrands}
                            {...props}
                          /> */}
                          <OndcCommonCard />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : null}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-2">
                {/* {new Array(8)?.fill("")?.map(
                  (_) => {
                    return() <div>"loader lagega idr"</div>;
                  }
                  //   <BswLoader classname="h-[200px]" key={i} />
                )} */}
                loader
              </div>
            ) : (
              allBrands?.length === 0 && (
                // <NoDataFound text="Oops, We didn’t found any brands." />
                <div>no data found compo</div>
              )
            )}
          </section>
        </section>
      </section>
    </Container>
  );
};

export default CommonListFilter;
