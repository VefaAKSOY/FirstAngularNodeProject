export class User {
    firstName: string;
    lastName: string;
    mode:string;
    email: string;
    phoneNo:string;
    constructor(user?:any){
      this.firstName = user && user.hasOwnProperty("firstName") ? user.firstName : ""
      this.lastName = user && user.hasOwnProperty("lastName") ? user.lastName : ""
      this.mode = user && user.hasOwnProperty("mode") ? user.mode : ""
      this.email = user && user.hasOwnProperty("email") ? user.email : ""
      this.phoneNo = user && user.hasOwnProperty("phoneNo") ? user.phoneNo : ""
    }
  }