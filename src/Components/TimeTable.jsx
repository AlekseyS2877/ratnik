import React from "react";
import "../css/timeTable.css";
import TimeTableRuler from "./TimeTableRuler";
import { elementsRange } from "../utils/helpers";
import TimeTableDay from "./TimeTableDay";
import * as settings from "../utils/settings";

const TimeTable = () => {
   const datesList = elementsRange(settings.startDate, settings.endDate, "days");
   const workHoursList = elementsRange(
      settings.startWorkTime,
      settings.endWorkTime,
      "hours"
   );

   return (
      <div className="container">
         <div className="card-group">
            <div
               className="card border text-white bg-secondary"
               style={{ maxWidth: "4em" }}
            >
               <div className="card-header text-center">#</div>
               <TimeTableRuler workHours={workHoursList} />
            </div>
            {datesList.map((mapElement) => (
               <TimeTableDay key={mapElement.getTime()} date={mapElement} />
            ))}
         </div>
      </div>
   );
};

export default TimeTable;
