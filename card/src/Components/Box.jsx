import React from "react";
import star from "../assets/images/icon-star.svg";

export default function Box() {
  return (
    <>
      <div className="top bg-[#202731]  flex flex-col justify-center items-start p-[2rem] rounded-[2rem] sm:w-[25rem] w-[22rem]">
        <div className="img flex justity-center items-center bg-[#262f38] p-[1rem] rounded-full w-[3rem] my-[1rem]">
          <img src={star} alt="img" className="w-[1.5rem]" />
        </div>
        <p className="text-[#f4f8f8] text-[1.7rem] mb-[1rem]">How did we do?</p>
        <p className="w-[100%]  text-[#959eac]  text-[1rem] mb-[1.5rem]"> 
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="rate flex flex-row justify-between items-center w-[100%] text-[#959eac] mb-[2rem]">
          <div className="flex justity-center items-center bg-[#262f38] p-[1rem] rounded-full w-[3rem] h-[3rem] text-[1.35em] text-center  hover:bg-[#fc7613] transition-all duration-300 ease-linear cursor-pointer">1</div>
          <div className="flex justity-center items-center bg-[#262f38] p-[1rem] rounded-full w-[3rem] h-[3rem] text-[1.5rem] text-center hover:bg-[#fc7613] transition-all duration-300 ease-linear cursor-pointer">2</div>
          <div className="flex justity-center items-center bg-[#262f38] p-[1rem] rounded-full w-[3rem] h-[3rem] text-[1.5rem] text-center hover:bg-[#fc7613] transition-all duration-300 ease-linear cursor-pointer">3</div>
          <div className="flex justity-center items-center bg-[#262f38] p-[1rem] rounded-full w-[3rem] h-[3rem] text-[1.5rem] text-center hover:bg-[#fc7613] transition-all duration-300 ease-linear cursor-pointer">4</div>
          <div className="flex justity-center items-center bg-[#262f38] p-[1rem] rounded-full w-[3rem] h-[3rem] text-[1.5rem] text-center hover:bg-[#fc7613] transition-all duration-300 ease-linear cursor-pointer">5</div>
        </div>
        <button className="bg-[#fc7613] w-[100%] text-[#f4f8f8] text-[1.6rem] rounded-[2rem] h-[3rem] hover:bg-[#ffffff] transition-all ease-linear duration-200 hover:text-[#fc7613]">Submit</button>
      </div>
      <div className="bottom  "></div>
    </>
  );
}
