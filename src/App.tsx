import "./styles/App.css";
import "./styles/main.css";
import "./i18n/locales/index";
import { NavigationMenu } from "./components/NavigationMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { HomePage } from "./pages/Home";
import { ProjectDetailPage } from "./pages/ProjectDetail";

function App() {
  const [isLight, setIsLight] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light";
  });

  // sync theme
  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight])

  return (
    <BrowserRouter>
      <div className={`index-page min-h-screen transition-colors duration-500 ${isLight ? 'light' : ''}`} style={{ backgroundColor: 'var(--bg)' }}>
        <NavigationMenu setTheme={setIsLight} theme={isLight} />

        {/* Routing halaman */}
        <Routes>
          <Route path="/" element={<HomePage isLight={isLight} />} />
          <Route path="/project/:id" element={<ProjectDetailPage isLight={isLight} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
