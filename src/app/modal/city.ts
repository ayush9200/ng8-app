export class City{
    cityId : number;
    name : string; 


    constructor(response : any){
        this.cityId = response.cityId;
        this.name = response.name;
    }
}