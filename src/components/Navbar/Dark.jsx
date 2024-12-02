import { useEffect, useState } from "react";
import Darkmood from "../../assets/Website/dark-mode-button-85jBkhOs.png";
import Lightmood from "../../assets/Website/light-mode-button-X4OXHFfW.png";
function Dark() {
  const [mood, setMood] = useState(() =>
    localStorage.getItem("mood") ? localStorage.getItem("mood") : "light"
  );

  //   () =>
  //     localStorage.getItem("mood") ? localStorage.getItem("mood") :

  function handleMood() {
    switch (mood) {
      case "dark":
        setMood("light");
        break;
      case "light":
        setMood("dark");
        break;
      default:
        "";
    }
  }
  useEffect(() => {
    if (mood === "dark") document.querySelector("html").classList.add("dark");
    else document.querySelector("html").classList.remove("dark");

    localStorage.setItem("mood", mood);
  }, [mood]);
  return (
    <div>
      <img
        onClick={handleMood}
        src={mood === "light" ? Lightmood : Darkmood}
        alt={`${mood}`}
        className="w-12 cursor-pointer drop-shadow[1px_1px_1px_rgva(0,0,0,0.1)] transition-all duration-300 "
      />
    </div>
  );
}

export default Dark;
