import { useStateContext } from "../provider/StateContext";

const OutputDisplay = () => {
  const { displayText, currentThemeIndex } = useStateContext();

  function numberWithCommas(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <section className="w-full h-50 flex justify-center mb-4">
      <div
        className={`w-full max-w-[500px] h-16 sm:h-24 sm:py-6 rounded-md py-4 px-4
           ${
             currentThemeIndex === 0
               ? "bg-themeOneVeryDarkDesaturatedBlueToggle"
               : currentThemeIndex === 1
               ? "bg-themeTwoVeryLightGrayScreen"
               : "bg-themeThreeVeryDarkViolet"
           }
          
          `}
      >
        <p
          className={`flex justify-end items-center font-bold text-3xl sm:text-4xl  text-themeOneWhite
           ${
             currentThemeIndex === 0
               ? "text-themeOneWhite"
               : currentThemeIndex === 1
               ? "text-themeTwoVeryDarkGrayishYellow"
               : "text-themeThreeLightYellow"
           }
          `}
        >
          {numberWithCommas(displayText)}
        </p>
      </div>
    </section>
  );
};

export default OutputDisplay;
