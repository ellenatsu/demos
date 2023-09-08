import React, { useRef, useEffect } from "react";
import "./revealingSVG.css";

export const RevealingSVG = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          } else {
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(svgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="line-container">
      <svg
        ref={svgRef}
        className="revealing-svg"
        viewBox="0 0 151 1438"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M66 1L71 370L64.5 373L26.5 360.5C23.3333 359.5 17 360 17 370C17 380 23.3333 397.167 26.5 404.5C27.1666 406.333 28.1 410.4 26.5 412C24.9 413.6 10.1666 433 2.99997 442.5C1.99997 444.833 0.599969 450.1 2.99997 452.5C5.39997 454.9 12.6667 454.167 16 453.5L45 452.5C47 451.667 51.8 451.8 55 459C58.2 466.2 67.6667 478 72 483V778.5C63.8333 784.167 50.8 798.9 64 812.5C77.2 826.1 68.1667 819.167 62 814C50.3333 812.5 25.1 815.5 17.5 839.5C9.9 863.5 12.3333 871.833 14.5 873C16.5 877.333 22.7 886.7 31.5 889.5C40.3 892.3 61.5 892 71 891.5V1325C55.6667 1325.5 24.1 1331.9 20.5 1353.5C16.9 1375.1 17.6667 1417.83 18.5 1436.5H45.5V1388.5C47.6667 1381.83 55.8 1368.5 71 1368.5C86.2 1368.5 95.6667 1379.83 98.5 1385.5V1436.5H126.5V1378.5V1370.5M126.5 1370.5C115.667 1369.5 93.9 1364.7 93.5 1353.5C93.1 1342.3 92 1326.83 91.5 1320.5L106.5 1329.5C107.667 1328 111.8 1325 119 1325C126.2 1325 132 1328 134 1329.5L149 1320.5V1353.5C147.333 1359.17 140.5 1370.5 126.5 1370.5Z"
          stroke="#FBA7A7"
          stroke-width="3"
        />
      </svg>
    </div>
  );
};
