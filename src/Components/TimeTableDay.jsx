import React, { useState, useEffect } from "react";
import Event from "../dataTypes/Event";
import FreeTimeCell from "./FreeTimeCell";
import EventCell from "./EventCell";
import * as settings from "../utils/settings";
import * as backend from "../utils/backend";
import * as helpers from "../utils/helpers";

const TimeTableDay = ({ date }) => {
   const [stateEvents, setEventsList] = useState([]);

   const proportion = settings.rulerElementHeight / settings.rulerStepInMinutes;

   const reloadEvents = (parEvents) => setEventsList(parEvents);
   useEffect(() => {
      backend.getEvents(date, reloadEvents);
   }, [date]);

   const timeRanges = helpers.fillTheVoids(stateEvents);

   console.log(timeRanges);

   return (
      <div className="card border">
         <div className="card-header text-center text-white bg-secondary">
            {helpers.dateToString(date)}
         </div>
         <div className="card-body">
            {timeRanges.map((eachRange) => {
               if (eachRange instanceof Event) {
                  return (
                     <EventCell
                        event={eachRange}
                        proportion={proportion}
                        key={eachRange.start().getTime()}
                     />
                  );
               }
               return (
                  <FreeTimeCell
                     timeRange={eachRange}
                     proportion={proportion}
                     key={eachRange.start().getTime()}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default TimeTableDay;
