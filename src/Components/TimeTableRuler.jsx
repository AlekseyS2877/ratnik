import React from "react";
import * as settings from "../utils/settings";

const rulerElements = (workHours, cellHeight) =>
   workHours.map((eachHour, index) => {
      let borderTop = "";
      if (index > 0) {
         borderTop = "border-top";
      }
      return (
         <div
            className={["p-0 m-0", borderTop].join(" ")}
            style={{ height: cellHeight }}
            key={eachHour.getTime()}
         >
            {eachHour.getHours()}
         </div>
      );
   });

const TimeTableRuler = ({ workHours }) => (
   <div className="card-body px-0 mx-0 text-center">
      {rulerElements(workHours, [settings.rulerElementHeight, "em"].join(""))}
   </div>
);

export default TimeTableRuler;
