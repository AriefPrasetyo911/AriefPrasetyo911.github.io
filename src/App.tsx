import "./styles/App.css";
import "./styles/main.css";
import "./i18n/locales/index";
import { MenuComponent } from "./components/MenuComponent";
import HeroComponent from "./components/HeroComponent";
import { AboutComponent } from "./components/AboutComponent";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="index-page">
      <MenuComponent />
      <main className="main">
        <HeroComponent />
        <AboutComponent />
      </main>
    </div>
  );
}

export default App;
