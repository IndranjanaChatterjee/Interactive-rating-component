import React, { useState } from "react";
import star from "../assets/images/icon-star.svg";
import img from "../assets/images/illustration-thank-you.svg";

export default function Box() {
  const [num,setNum]=useState(0);
  const [val,setVal]=useState(0);
  const[col1,setCol1]=useState(false);
  const[col2,setCol2]=useState(false);
  const[col3,setCol3]=useState(false);
  const[col4,setCol4]=useState(false);
  const[col5,setCol5]=useState(false);
  const[hide,setHide]=useState(false);
  const Number=(event)=>
  {
    
    setVal(event.target.innerText);
    
    if(event.target.innerText==1)
    {
      setCol1(true);
    }
    if(event.target.innerText==2)
    {
      setCol2(true);
    }
    if(event.target.innerText==3)
    {
      setCol3(true);
    }
    if(event.target.innerText==4)
    {
      setCol4(true);
    }
    if(event.target.innerText==5)
    {
      setCol5(true);
    }
    
  }
  
  const Change=()=>
  {
    setNum(val);
    setHide(true);
  }
  return (
    <>
      <div className={`top ${hide?"hidden":"block"} bg-[#202731]  flex flex-col justify-center items-start p-[2rem] rounded-[2rem] sm:w-[25rem] w-[22rem]`}>
        <div className="img flex justity-center items-center bg-[#262f38] p-[1rem] rounded-full w-[3rem] my-[1rem]">
          <img src={star} alt="img" className="w-[1.5rem]" />
        </div>
        <p className="text-[#f4f8f8] text-[1.7rem] mb-[1rem] font-bold">How did we do?</p>
        <p className="w-[100%]  text-[#959eac]  text-[1rem] mb-[1.5rem]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="rate flex flex-row justify-between items-center w-[100%] text-[#959eac] mb-[2rem]">
          <div className={`flex justity-center items-center ${col1?"text-[#ffffff]":"text-[#959eac]"} ${col1?"bg-[#959eac]":"bg-[#262f38]"} p-[1rem] rounded-full w-[3rem] h-[3rem] text-[1.35em] text-center hover:text-[#ffffff] hover:bg-[#fc7613] transition-all duration-300 ease-linear cursor-pointer`} onClick={Number}>
            1
          </div>
          <div className={`flex justity-center ${col2?"text-[#ffffff]":"text-[#959eac]"} items-center ${col2?"bg-[#959eac]":"bg-[#262f38]"} p-[1rem] rounded-full w-[3rem] h-[3rem] text-[1.35em] text-center hover:text-[#ffffff] hover:bg-[#fc7613] transition-all duration-300 ease-linear cursor-pointer`} onClick={Number}>
            2
          </div>
          <div className={`flex justity-center ${col3?"text-[#ffffff]":"text-[#959eac]"} items-center ${col3?"bg-[#959eac]":"bg-[#262f38]"} p-[1rem] rounded-full w-[3rem] h-[3rem] text-[1.35em] text-center hover:text-[#ffffff] hover:bg-[#fc7613] transition-all duration-300 ease-linear cursor-pointer`} onClick={Number}>
            3
          </div>
          <div className={`flex justity-center ${col4?"text-[#ffffff]":"text-[#959eac]"} items-center ${col4?"bg-[#959eac]":"bg-[#262f38]"} p-[1rem] rounded-full w-[3rem] h-[3rem] text-[1.35em] text-center hover:text-[#ffffff] hover:bg-[#fc7613] transition-all duration-300 ease-linear cursor-pointer`} onClick={Number}>
            4
          </div>
          <div className={`flex justity-center ${col5?"text-[#ffffff]":"text-[#959eac]"} items-center ${col5?"bg-[#959eac]":"bg-[#262f38]"} p-[1rem] rounded-full w-[3rem] h-[3rem] text-[1.35em] text-center hover:text-[#ffffff] hover:bg-[#fc7613] transition-all duration-300 ease-linear cursor-pointer`} onClick={Number}>
            5
          </div>
        </div>
        <button className="bg-[#fc7613] w-[100%] text-[#f4f8f8] text-[1.2rem] font-bold tracking-widest rounded-[2rem] h-[3rem] hover:bg-[#ffffff] transition-all ease-linear duration-200 hover:text-[#fc7613]" onClick={Change}>
          Submit
        </button>
      </div>
      <div className={`bottom  bg-[#202731]  flex flex-col justify-center items-center p-[2rem] rounded-[2rem] sm:w-[25rem] w-[22rem] ${hide?"block":"hidden"}`}>
        <img src={img} alt="img" className="mb-[1.5rem]" />
        <div className="  text-[#fc7613] bg-[#262f38] text-center px-[1.5rem] py-[0.3rem] rounded-[2rem] text-[1rem] mb-[1.5rem]">
          You selected {num} out of 5
        </div>
        <p className="text-[#ffffff] text-[2rem] mb-[1rem]">Thank you!</p>
        <p className="text-center text-[#959eac]">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </>
  );
}
