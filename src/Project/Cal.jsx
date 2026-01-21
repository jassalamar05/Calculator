import { useState } from "react";

export default function Cal() {
    // create kiti 2 feilds in ik state leke augi 
    // duji state da result nu calcultae krugi 
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // ahh previous state+  next state nu add kruga jo bhi hoya operation odo kruga 
  const addValue = (val) => {
    setInput((prev) => prev + val);
  };

  // it will clear the feilds (input wali + result wali bhi)
  const clearAll = () => {
    setInput("");
    setResult("");
  };

  // ithe assi use kita eval()-- ahh ki krda a ahh tuhada string nu javascript expression samaj ke solve krda a taki ohho solve kre equation assi diti a string ch
  const calculate = () => {
    const ans = eval(input);
    setResult(ans);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white">
      <div className=" bg-zinc-800 p-5 rounded-2xl space-y-5">

        {/* Display */}
        <div className="bg-zinc-700 p-4 rounded-xl">
          <p className="text-zinc-300 text-sm">Input</p>
          {/* ede ch || "0" -> add ta kita jai taki static space cover kr lwe and ik dam nal number show na hove */}
          <h2 className="text-2xl font-bold">{input || "0"}</h2>

          <p className="text-zinc-300 text-sm mt-2">Result</p>
          <h2 className="text-3xl font-extrabold">{result || "0"}</h2>
        </div>

        {/* Buttons */}

        {/* mapping of number and operators here so to make equeations to be solved by this */}
        <div className="grid grid-cols-4 gap-3">

          {/* 1 to 10 */}
          {[1,2,3,4,5,6,7,8,9,10].map((num) => (
            <button
              key={num}
            // ede ch hun jehra number auga ohnu string ch convert krr dauga 
            // 🔥 Why String(num)?
            // Kyuki input hum string me build kar rahe hain:
            // "5" + "+" + "5" = "5+5"
            // Agar string na banaye toh kabhi kabhi mix ho sakta hai.
            //& eval mei assi ohnu as a number treat krr rahe hai
              onClick={() => addValue(String(num))}
              className="bg-blue-500 p-3 rounded-xl hover:bg-blue-600 font-bold"
            >
              {num}
            </button>
          ))}

          {/* Operators */}
          {["+", "-", "*", "/"].map((op) => (
            <button
              key={op}
              onClick={() => addValue(op)}
              className="bg-purple-500 p-3 rounded-xl hover:bg-purple-600 font-bold"
            >
              {op}
            </button>
          ))}

          {/* Equal */}
          <button
            onClick={calculate}
            className="col-span-2 bg-green-500 p-3 rounded-xl hover:bg-green-600 font-bold"
          >
            =
          </button>

          {/* Clear */}
          <button
            onClick={clearAll}
            className="col-span-2 bg-red-500 p-3 rounded-xl hover:bg-red-600 font-bold"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}





//  more things to have an idea on::::::
// ✅ Why string only?
// Kyuki tum input me ye banana chahte ho:
// 👉 5+5
// 👉 10-2
// 👉 7*3
// 👉 20/4
// 👉 5+2*3

// Ye sab number nahi hote ❌
// Ye expression hote hain ✅

// Expression ka type hota hai string


// 🔥 Summary

// ✅ Expression banane ke liye string must
// ✅ Result nikalne ke baad number milta hai