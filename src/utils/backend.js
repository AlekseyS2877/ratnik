import Member from "../dataTypes/Member";
import Event from "../dataTypes/Event";
import { apiURL } from "./settings";
import { dateForQuery } from "./helpers";

const getEvents = async (parDate, callbackFunction) => {
   const dayInMilliseconds = 1000 * 60 * 60 * 24;
   const queryStartDate = dateForQuery(parDate);
   const queryEndDate = dateForQuery(new Date(parDate.getTime() + dayInMilliseconds));

   const response = await fetch(
      `${apiURL}/_partition/events/_design/events/_view/events?include_docs=true&inclusive_end=false&start_key="${queryStartDate}"&end_key="${queryEndDate}"`
   );
   if (!response.ok) {
      console.log("Абзац...", response);
   }

   const result = await response.json();

   const events = [];

   result.rows.forEach((eachRow) => {
      const tempKeys = eachRow.key.split("^", 2);
      if (tempKeys[1] === "1") {
         const docEvent = eachRow.doc;
         const memberRow = result.rows.find((findRow) => {
            // eslint-disable-next-line no-underscore-dangle
            if (findRow.doc._id === docEvent.memberID) {
               return true;
            }
            return false;
         });
         console.log("Member: ", memberRow);
         events.push(
            new Event(
               new Date(docEvent.startOfEvent),
               new Date(docEvent.endOfEvent),
               docEvent.eventDescription,
               new Member(memberRow.doc),
               eachRow.id
            )
         );
      }
   });

   callbackFunction(events);
};

// eslint-disable-next-line import/prefer-default-export
export { getEvents };
