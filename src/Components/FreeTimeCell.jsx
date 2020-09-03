import React from "react";

const FreeTimeCell = ({ timeRange, proportion }) => (
   <div style={{ height: [proportion * timeRange.durationInMinutes(), "em"].join("") }} />
);

export default FreeTimeCell;
