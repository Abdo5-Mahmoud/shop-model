import React, { useState } from "react";

function LangSwitch() {
  const [lang, setLang] = useState("En");
  return (
    <div className=" relative p-2 w-10 h-5 cursor-pointer rounded-md flex justify-center items-center ">
      <select
        name="select"
        id="select"
        className="bg-none relative dark:bg-gray-500 w-10 h-5 duration-500 cursor-pointer rounded-md  "
        onChange={(e) => setLang(e.target.value)}
        value={lang}
      >
        <option className="p-2 rounded-md" value="Ar">
          Ar
        </option>
        <option className="p-2 rounded-md" value="En">
          En
        </option>
      </select>
      {/* // <label
    //   htmlFor="lang"
    //   className="bg-dark-100 w-10 bg-white h-5 cursor-pointer relative block z-50 rounded-full"
    // >
    //   <input type="checkbox" name="lang" id="lang" className="sr-only peer" />
    //   <span className="w-2/5 h-4/5 bg-primary absolute rounded-full left-1 top-[2px] peer-checked:bg-secondary peer-checked:left-5 transition-all"></span>
    // </label> */}
    </div>
  );
}

export default LangSwitch;
