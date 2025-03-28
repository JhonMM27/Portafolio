// import { About } from "../components/sections/about";
// import { Hero } from "../components/sections/hero";
// import { Skills } from "../components/sections/skills";
// import { Projects } from "../components/sections/projects";
// import { Footer } from "../components/ui/footer";
// import { Navbar } from "../components/ui/navbar";
// import { Contact } from "../components/sections/contact";
// import { FloatingButtons } from "../components/ui/FloatingButtons"
// import { ThemeProvider } from "../components/contexts/ThemeContext"
// import { LanguageProvider } from "../components/contexts/LanguageContext"

import {LoadingScreen} from "../components/sections/loading-screen"
import "../styles/globals.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <ThemeProvider>
    //   <LanguageProvider>
    //     <div className="app">
    //       <Navbar />
    //       <main>
    //         <Hero />
    //         <About />
    //         <Skills />
    //         <Projects />
    //         <Contact />
    //       </main>
    //       <Footer />
    //       <FloatingButtons />
    //     </div>
    //   </LanguageProvider>
    // </ThemeProvider>
    <LoadingScreen />
  );
}

export default App;
