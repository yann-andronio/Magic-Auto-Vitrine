// src/App.jsx
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./page/home/Home";
import Loader from "./components/loader/Loader";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      // once: true, alefa indray ihany ny anim
    });
   }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? <Loader onComplete={() => setLoading(false)} /> : <Home />}
    </AnimatePresence>
  );
};

export default App;
