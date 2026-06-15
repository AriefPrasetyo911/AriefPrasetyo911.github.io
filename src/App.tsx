import "./styles/App.css";
import "./styles/main.css";
import "./i18n/locales/index";
import { NavigationMenu } from "./components/NavigationMenu";
import { BrowserRouter } from "react-router-dom";
import HeroComponent from "./components/HeroComponent";
import { useState } from "react";
// import { MenuComponent } from "./components/MenuComponent";
// import HeroComponent from "./components/HeroComponent";
// import { AboutComponent } from "./components/AboutComponent";

function App() {
  const [isLight, setIsLight] = useState(false);

  return (
    <BrowserRouter>
      <div className={`index-page min-h-screen transition-colors duration-500 ${isLight ? 'light' : ''}`} style={{ backgroundColor: 'var(--bg)' }}>
        <NavigationMenu setTheme={setIsLight} theme={isLight} />
        <HeroComponent isLight={isLight} />
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
