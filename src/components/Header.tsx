import { useStateContext } from "../provider/StateContext";

const Header = () => {
  const { currentThemeIndex, setCurrentThemeIndex } = useStateContext();

  return (
    <header className="w-full h-24 flex justify-center">
      <div className="w-full max-w-[500px] flex justify-between px-4 py-8 text-themeOneLightGrayishOrange">
        <h1
          className={`font-bold text-2xl lowercase ${
            currentThemeIndex === 0
              ? "text-themeOneWhite"
              : currentThemeIndex === 1
              ? "text-themeTwoVeryDarkGrayishYellow"
              : "text-themeThreeLightYellow"
          } `}
        >
          Calc
        </h1>
        <div className="flex justify-center  items-end w-54 gap-7">
          <p
            className={`uppercase  font-semibold text-xs text-themeOneWhite 
             ${
               currentThemeIndex === 0
                 ? "text-themeOneWhite"
                 : currentThemeIndex === 1
                 ? "text-themeTwoVeryDarkGrayishYellow"
                 : "text-themeThreeLightYellow"
             }
            `}
          >
            Theme
          </p>
          <div className="flex flex-col items-center w-full">
            <p
              className={`flex gap-3  text-xs font-bold text-themeOneWhite 
               ${
                 currentThemeIndex === 0
                   ? "text-themeOneWhite"
                   : currentThemeIndex === 1
                   ? "text-themeTwoVeryDarkGrayishYellow"
                   : "text-themeThreeLightYellow"
               }
              
              `}
            >
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </p>
            <div className={`w-14  inline-flex h-5 rounded-xl py-1 px-1 bg- 
               ${
                      currentThemeIndex === 0
                        ? "bg-themeOneVeryDarkDesaturatedBlueScreen"
                        : currentThemeIndex === 1
                        ? "bg-themeTwoGrayishRed"
                        : "bg-themeThreeVeryDarkViolet"
                    }
              `}>
              <div
                className={`hover:cursor-pointer  relative w-3 h-3 rounded-full transition-all duration-300 ease-in-out 
                    ${
                      currentThemeIndex === 0
                        ? "translate-x-0 bg-themeOneDarkRed   hover:bg-themeOneRed"
                        : currentThemeIndex === 1
                        ? "translate-x-4 bg-themeTwoDarkOrange  hover:bg-themeTwoHoverLightOrange"
                        : "translate-x-8 bg-themeThreePureCyanBg hover:bg-themeThreeSoftCyanShadow"
                    }`}
                onClick={() => {
                  if (currentThemeIndex === 0) {
                    setCurrentThemeIndex(1);
                  }
                  if (currentThemeIndex === 1) {
                    setCurrentThemeIndex(2);
                  }
                  if (currentThemeIndex === 2) {
                    setCurrentThemeIndex(0);
                  }
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
