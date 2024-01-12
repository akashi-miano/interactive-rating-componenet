import thanksImg from "../assets/illustration-thank-you.svg";
const Thanks = ({ rating }: { rating: number }) => {
  return (
    <section>
      <div className="container max -w-[1250px] mx-auto">
        <div className="contents-wrapper bg-[#1f2630] p-8 rounded-3xl relative max-w-[350px]">
          <div className="flex justify-center mb-8 img-wrapper">
            <img src={thanksImg} alt="star icon" />
          </div>
          <header className="text-center flow-content--m">
            <span className="text-[#a27141] inline-block mb-4 bg-[#2b2c30] px-4 py-2 rounded-full text-sm font-medium">
              You select {rating} out of 5
            </span>
            <h1 className="text-2xl font-bold text-white">Thank you!</h1>
            <p className="text-sm text-[#8b919d] max-w-[450px] mx-auto">
              We appreciate you giving the time to give the rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Thanks;
