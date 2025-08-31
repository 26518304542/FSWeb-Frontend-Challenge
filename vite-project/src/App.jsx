// src/App.jsx
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {


  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="w-full min-h-screen font-sans bg-white text-black dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Header />
          <Skills />
          <Profile />
          <Projects />
          <Contact />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
