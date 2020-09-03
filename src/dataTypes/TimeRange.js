class TimeRange {
   constructor(parStart, parEnd) {
      this.privateStart = parStart;
      this.privateEnd = parEnd;
   }

   start(startDateTime) {
      const tempDateTime = this.privateStart;
      if (startDateTime !== undefined) {
         this.privateStart = startDateTime;
      }
      return tempDateTime;
   }

   end(endDateTime) {
      const tempDateTime = this.privateEnd;
      if (endDateTime !== undefined) {
         this.privateEnd = endDateTime;
      }
      return tempDateTime;
   }

   durationInMinutes() {
      return Math.abs((this.end().getTime() - this.start().getTime()) / 1000 / 60);
   }
}

export default TimeRange;
