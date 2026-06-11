import "./styles/App.css";
import "./styles/main.css";
import "./i18n/locales/index";
import { NavigationMenu } from "./components/NavigationMenu";
import { BrowserRouter } from "react-router-dom";
import HeroComponent from "./components/HeroComponent";
// import { MenuComponent } from "./components/MenuComponent";
// import HeroComponent from "./components/HeroComponent";
// import { AboutComponent } from "./components/AboutComponent";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="index-page">
        <NavigationMenu />
        <HeroComponent />
        {/* <MenuComponent />
        <main className="main">
          <HeroComponent />
          <AboutComponent />
        </main> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
