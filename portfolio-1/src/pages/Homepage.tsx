import { useEffect, useState } from "react";

function Homepage() {
  const [showParagraphs, setShowParagraphs] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowParagraphs(true), 1500); // 1.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-end items-center m-0 p-0">
      <h1 className="text-8xl font-bold text-white mb-20 spread-letters whitespace-nowrap">
        Jamin Workman
      </h1>
      {showParagraphs && (
        <div className="flex flex-row justify-between items-center gap-6 pb-24">
          <p className="text-white text-2xl">Software Engineer</p>
          <p className="text-white text-2xl">Mount Lookout, WV</p>
        </div>
      )}
    </div>
  );
}

export default Homepage;