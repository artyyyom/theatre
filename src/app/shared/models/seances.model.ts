import { Time } from "@angular/common";
import { Stages } from "./stages.model";

export class Seances {
    constructor(
      public id: number,
      public date: Date,
      public time: Time,
      public performance_id: number, 
      public stage_id: number,
      public stage: Stages
    ) {}
  
  }
  