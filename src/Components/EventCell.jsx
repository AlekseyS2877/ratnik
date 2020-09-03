import React from "react";

const EventCell = ({ event, proportion }) => (
   <div
      className="card-text border-top border-bottom text-white bg-success"
      style={{ height: [proportion * event.durationInMinutes(), "em"].join("") }}
      cell-tooltip={event.member().name()}
   >
      {event.description()}
   </div>
);

export default EventCell;
