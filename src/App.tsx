import Header from "./components/Header";
import NumberGrid from "./components/NumberGrid";
import OutputDisplay from "./components/OutputDisplay";
import { useStateContext } from "./provider/StateContext";
const App = () => {
  const { currentThemeIndex } = useStateContext();

  return (
    <main
      className={`w-full px-3 h-screen transition-all flex flex-col justify-center items-center  ${
        currentThemeIndex === 0
          ? "bg-themeOneVeryDarkDesaturatedBlueMain"
          : currentThemeIndex === 1
          ? "bg-themeTwoLightGrayBg"
          : "bg-themeThreeVeryDarkVioletBg"
      }`}
    >
      <div>
        <Header />
        <OutputDisplay />
        <NumberGrid />
        <p className="text-emerald-500">
          Challenge by{" "}
          <a className="text-yellow-900 hover:underline" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a className="text-red-500 hover:underline" href="https://www.linkedin.com/in/mikiyas-kebede-b661aa225/" target="_blank">Mikiyas Kebede</a>.
        </p>
      </div>
    </main>
  );
};

export default App;
