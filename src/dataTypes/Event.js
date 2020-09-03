import TimeRange from "./TimeRange";

class Event extends TimeRange {
   constructor(parStart, parEnd, parDescription, parMember, parID) {
      super(parStart, parEnd);
      this.privateDescription = parDescription;
      this.privateMember = parMember;
      this.privateID = parID;
   }

   id(parID) {
      const tempID = this.privateID;
      if (parID !== undefined) {
         this.privateID = parID;
      }
      return tempID;
   }

   member() {
      return this.privateMember;
   }

   description(text) {
      const tempDescription = this.privateDescription;
      if (text !== undefined) {
         this.privateDescription = text;
      }
      return tempDescription;
   }
}

export default Event;
