import Slider from "./slider";
export default function Hero() {
  return (
    <div>
        <div className="mb-4 flex flex-col">
          <Slider />
          <div>
            <p className="mt-16 text-center text-3xl font-extrabold text-[#264653] md:mt-32 md:text-4xl lg:mt-40 lg:text-6xl">
              Exploring Knowledge 
              <br/> 
              Shaping Futures
            </p>
          </div>
        </div>
      </div>
  );
}
