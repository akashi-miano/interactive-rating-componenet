import React from "react";
import Thanks from "./Thanks";
import { useState } from "react";
import starIcon from "../assets/icon-star.svg";

const Feedback = () => {
  const [selected, setSelected] = useState<number>(-1);
  const [submitted, setIsSubmitted] = useState<boolean>(false);

  const handleClick = (num: number) => {
    setSelected(num);
  };

  const handleSubmittedForm = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      {submitted ? (
        <Thanks rating={selected} />
      ) : (
        <section>
          <div className="container mx-auto max-w-[1250px]">
            <form
              className="contents-wrapper bg-[#2f2630] p-8 rounded-3xl relative max-w-[350px] w-full"
              onSubmit={handleSubmittedForm}
            >
              <div className="img-wrapper h-[52px] w-[50px] bg-[#252f37] p-2 rounded-full flex justify-center items-center translate-y-[-15px]">
                <img src={starIcon} alt="star icon" />
              </div>
              <header className="flow-content--m">
                <h2 className="text-2xl font-bold text-white">
                  How did we do?
                </h2>
                <p className="text-sm text-[#9b919d] max-w-[450px]">
                  Please let us know what we did with your support request. All
                  feedback is appreciated to hel us improve our offering!
                </p>
              </header>
              <div className="flex items-center justify-between gap-3 my-8 btns-wrapper">
                {[1, 2, 3, 4, 5].map((item) => (
                  <button
                    className="h-[51px] w-[50px] bg-[#252e37] rounded-full text-[#747c87] focus:!bg-[#fc7613] hover:bg-[#7D89B3] hover:text-white focus:!text-white hover:cursor-pointer"
                    onClick={() => {
                      handleClick(item);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                type="submit"
                disabled={selected === -1}
                onClick={() => setIsSubmitted(true)}
                className={
                  selected === -1
                    ? "btn w-full text-white !bg-gray-599 rounded-full"
                    : "btn w-full text-white !bg-[#fc7614] rounded-full hover:!bg-white hover:text-[#fc7613] duration-300 focus:text-[#fc7613] focus:!bg-white"
                }
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
};

export default Feedback;
