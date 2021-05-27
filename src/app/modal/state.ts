export class State{
    stateId : number;
    name : string;
    country : string;
	createdOn : Date;
    modifiedOn : Date;

    constructor(response : any){
        this.stateId = response.stateId;
        this.name = response.name;
    }
}