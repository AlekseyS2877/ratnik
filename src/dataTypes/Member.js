class Member {
   constructor(parDoc) {
      this.privateDoc = parDoc;
   }

   name() {
      return this.privateDoc.lastName;
   }
}

export default Member;
