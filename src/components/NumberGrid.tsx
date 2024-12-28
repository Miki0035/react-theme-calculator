import { calculatorButtons } from "../../constants";
import { useStateContext } from "../provider/StateContext";

const NumberGrid = () => {
  const { displayText, currentThemeIndex, setDisplayText } = useStateContext();
  let answer = 0;

  const operation = (operation: string | number) => {
    switch (operation) {
      case "Del":
        setDisplayText((prev) => prev.slice(0, -1));
        break;
      case "Reset":
        setDisplayText("");
        break;
      case "=":
        // add all elements in the
        answer = eval(displayText);
        if (isNaN(answer)) {
          setDisplayText(answer.toString());
        }
        break;
      case "x":
        setDisplayText((prev) => prev + "*");
        break;
      case "/":
        setDisplayText((prev) => prev + "/");
        break;
      case "+":
        setDisplayText((prev) => prev + "+");
        break;
      case ".":
        setDisplayText((prev) => prev + ".");
        break;
      default:
        setDisplayText((prev) => prev + operation.toString());
        break;
    }
  };

  return (
    <section className="w-full h-80 flex justify-center">
      <div
        className={`w-full max-w-[500px] bg-themeOneVeryDarkDesaturatedBlueToggle w-5/6 h-full rounded-md py-4 px-4
        
         ${
           currentThemeIndex === 0
             ? "bg-themeOneVeryDarkDesaturatedBlueMain"
             : currentThemeIndex === 1
             ? "bg-themeTwoGrayishRed"
             : "bg-themeThreeVeryDarkVioletBg"
         }
        
        `}
      >
        <div className="grid grid-cols-4 gap-2 place-items-center">
          {/* Row 1 */}

          {calculatorButtons.rowOne.map((button) =>
            button.number !== "Del" ? (
              <button
                key={button.id}
                onClick={() => operation(button.number)}
                className={`w-14 h-14 sm:w-20 sm:h-12 h-full transition-all  text-center text-2xl rounded-md py-2 px-5 font-bold border-b-4 
                    ${
                      currentThemeIndex === 0
                        ? "bg-themeOneLightGrayishOrange text-themeOneDesaturatedDarkBlueKeyshadow border-themeOneGrayishOrange hover:bg-themeOneWhite"
                        : currentThemeIndex === 1
                        ? "bg-themeTwoLightGrayishYellow text-themeTwoVeryDarkGrayishYellow border-themeOneGrayishOrange hover:bg-themeOneWhite"
                        : "bg-themeThreeVeryDarkVioletKeyBg text-themeThreeLightYellow border-themeThreeVividMagentaShadow hover:bg-themeThreeDarkMagenta"
                    }
                  
                  `}
              >
                {button.number}
              </button>
            ) : (
              <button
                key={button.id}
                onClick={() => operation(button.number)}
                className={`w-14 h-14  sm:w-20 sm:h-12 transition-all  py-3  font-semibold  text-lg uppercase text-center rounded-md   border-b-4
                   ${
                     currentThemeIndex === 0
                       ? "bg-themeOneDesaturatedDarkBlueKeybg text-themeOneWhite border-themeOneDesaturatedDarkBlueKeyshadow  hover:bg-themeOneHoverLightBlue"
                       : currentThemeIndex === 1
                       ? "bg-themeTwoDarkModerateCyanBg text-themeTwoWhite border-themeTwoVeryDarkCyanShadow  hover:bg-themeTwoHoverLightCyan"
                       : "bg-themeThreeDarkVioletBg text-themeThreeWhite border-themeThreeVividMagentaShadow hover:bg-themeThreeDarkMagenta"
                   }
                  
                  `}
              >
                {button.number}
              </button>
            )
          )}

          {/* Row 2 */}

          {calculatorButtons.rowTwo.map((button) => (
            <button
              key={button.id}
              onClick={() => operation(button.number)}
              className={`w-14 h-14  sm:w-20 sm:h-12 transition-all  text-center py-2 px-5 font-bold text-2xl rounded-md  border-b-4 
                 ${
                   currentThemeIndex === 0
                     ? "bg-themeOneLightGrayishOrange text-themeOneDesaturatedDarkBlueKeyshadow border-themeOneGrayishOrange hover:bg-themeOneWhite"
                     : currentThemeIndex === 1
                     ? "bg-themeTwoLightGrayishYellow text-themeTwoVeryDarkGrayishYellow border-themeOneGrayishOrange hover:bg-themeOneWhite"
                     : "bg-themeThreeVeryDarkVioletKeyBg text-themeThreeLightYellow border-themeThreeVividMagentaShadow hover:bg-themeThreeDarkMagenta"
                 }
                `}
            >
              {button.number}
            </button>
          ))}

          {/* Row 3 */}

          {calculatorButtons.rowThree.map((button) => (
            <button
              key={button.id}
              onClick={() => operation(button.number)}
              className={`w-14 h-14  sm:w-20 sm:h-12 transition-all text-center py-2 px-5 font-bold text-2xl rounded-md   border-b-4
                 ${
                   currentThemeIndex === 0
                     ? "bg-themeOneLightGrayishOrange text-themeOneDesaturatedDarkBlueKeyshadow border-themeOneGrayishOrange hover:bg-themeOneWhite"
                     : currentThemeIndex === 1
                     ? "bg-themeTwoLightGrayishYellow text-themeTwoVeryDarkGrayishYellow border-themeOneGrayishOrange hover:bg-themeOneWhite"
                     : "bg-themeThreeVeryDarkVioletKeyBg text-themeThreeLightYellow border-themeThreeVividMagentaShadow hover:bg-themeThreeDarkMagenta"
                 }
                `}
            >
              {button.number}
            </button>
          ))}

          {/* Row 4 */}

          {calculatorButtons.rowFour.map((button) => (
            <button
              key={button.id}
              onClick={() => operation(button.number)}
              className={`w-14 h-14  sm:w-20 sm:h-12 transition-all  text-center py-2 px-5 font-bold text-xl rounded-md   border-b-4
                 ${
                   currentThemeIndex === 0
                     ? "bg-themeOneLightGrayishOrange text-themeOneDesaturatedDarkBlueKeyshadow border-themeOneGrayishOrange hover:bg-themeOneWhite"
                     : currentThemeIndex === 1
                     ? "bg-themeTwoLightGrayishYellow text-themeTwoVeryDarkGrayishYellow border-themeOneGrayishOrange hover:bg-themeOneWhite"
                     : "bg-themeThreeVeryDarkVioletKeyBg text-themeThreeLightYellow border-themeThreeVividMagentaShadow hover:bg-themeThreeDarkMagenta"
                 }
                `}
            >
              {button.number}
            </button>
          ))}

          {/* row 5 */}
          <button
            className={`w-full sm:w-48 transition-all col-span-2 text-center  py-4 px-5 font-semibold  text-sm rounded-md   border-b-4
              ${
                currentThemeIndex === 0
                  ? "bg-themeOneDesaturatedDarkBlueKeybg text-themeOneWhite border-themeOneDesaturatedDarkBlueKeyshadow  hover:bg-themeOneHoverLightBlue"
                  : currentThemeIndex === 1
                  ? "bg-themeTwoDarkModerateCyanBg text-themeTwoWhite border-themeTwoVeryDarkCyanShadow  hover:bg-themeTwoHoverLightCyan"
                  : "bg-themeThreeDarkVioletBg text-themeThreeWhite border-themeThreeVividMagentaShadow hover:bg-themeThreeDarkMagenta"
              }
              `}
            onClick={() => operation("Reset")}
          >
            RESET
          </button>
          <button
            className={`w-full sm:w-48 text-center  col-span-2 py-4 px-5 font-bold  text-sm rounded-md   border-b-4 
              ${
                currentThemeIndex === 0
                  ? "bg-themeOneDesaturatedDarkBlueKeybg text-themeOneWhite border-themeOneDesaturatedDarkBlueKeyshadow  hover:bg-themeOneHoverLightBlue"
                  : currentThemeIndex === 1
                  ? "bg-themeTwoOrange text-themeTwoWhite border-themeTwoDarkOrange  hover:bg-themeTwoHoverLightOrange"
                  : "bg-themeThreePureCyanBg text-themeThreeVeryDarkBlue border-themeThreeSoftCyanShadow  hover:bg-themeThreeSoftCyanShadow"
              }
              
              `}
            onClick={() => operation("=")}
          >
            =
          </button>
        </div>
      </div>
    </section>
  );
};

export default NumberGrid;
