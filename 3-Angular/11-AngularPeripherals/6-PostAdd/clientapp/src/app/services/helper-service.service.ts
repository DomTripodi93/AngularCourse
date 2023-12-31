import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class HelperService {
    datePipe: DatePipe = new DatePipe("en-us");

    setDateForDisplay(dateToConvert: Date | string) {
        // console.log(typeof dateToConvert);
        if (typeof dateToConvert === "string") {
            dateToConvert = new Date(Date.parse(dateToConvert));
        }
        // return this.datePipe.transform(dateToConvert, "yyyy/MM/dd hh:mm:ss a")
        return this.datePipe.transform(dateToConvert, "yyyy/MM/dd")
    }
    
}