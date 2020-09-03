import TimeRange from "../dataTypes/TimeRange";
import * as settings from "./settings";

const elementsRange = (rangeStart, rangeEnd, elementType) => {
   let elementInMilliseconds = 1000 * 60 * 60;
   if (elementType === "days") {
      elementInMilliseconds *= 24;
   }

   const elementsInRange = Math.ceil(
      (rangeEnd.getTime() - rangeStart.getTime()) / elementInMilliseconds,
   );
   const elementsList = new Array(elementsInRange).fill(undefined);
   return elementsList.map(
      (_mapDay, index) => new Date(rangeStart.getTime() + index * elementInMilliseconds),
   );
};

const twoDigitString = (numberToConvert) => {
   if (numberToConvert < 10) {
      return ["0", numberToConvert.toString()].join("");
   }
   return numberToConvert.toString();
};

const dateForQuery = (dateToConvert) => {
   const tempYear = dateToConvert.getFullYear();
   const tempMonth = twoDigitString(dateToConvert.getMonth() + 1);
   const tempDate = twoDigitString(dateToConvert.getDate());
   return [tempYear, tempMonth, tempDate].join("-");
};

const dateToString = (parDate) =>
   [
      twoDigitString(parDate.getDate()),
      twoDigitString(parDate.getMonth() + 1),
      parDate.getFullYear(),
   ].join(".");

const fillTheVoids = (eventsList) => {
   const startOfWork = settings.startWorkTime;
   const endOfWork = settings.endWorkTime;

   if (eventsList.length === 0) {
      return [new TimeRange(startOfWork, endOfWork)];
   }

   const rangesList = [];
   let now = 0;

   eventsList.forEach((eachEvent, index) => {
      if (index === 0) {
         startOfWork.setDate(eachEvent.start().getDate());
         startOfWork.setMonth(eachEvent.start().getMonth());
         startOfWork.setFullYear(eachEvent.start().getFullYear());
         endOfWork.setDate(eachEvent.end().getDate());
         endOfWork.setMonth(eachEvent.end().getMonth());
         endOfWork.setFullYear(eachEvent.end().getFullYear());
         now = startOfWork.getTime();
      }
      const freeRangeEnd = eachEvent.start().getTime();
      const freeRangeDuration = freeRangeEnd - now;
      if (freeRangeDuration > 0) {
         rangesList.push(new TimeRange(new Date(now), new Date(freeRangeEnd)));
      }
      rangesList.push(eachEvent);
      now = eachEvent.end().getTime();
   });

   if (now < endOfWork.getTime()) {
      rangesList.push(new TimeRange(new Date(now), endOfWork));
   }

   return rangesList;
};

export { elementsRange, dateForQuery, dateToString, fillTheVoids };
