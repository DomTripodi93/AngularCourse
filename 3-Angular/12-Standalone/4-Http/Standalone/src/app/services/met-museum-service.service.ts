import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({ providedIn: "root"})
export class MetMuseumService {
    rootUrl: string = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";
    randomIds: number[] = [
        23849,
        12345,
        97012,
        83253,
        9032
    ]

    constructor(
        private http: HttpClient
    ){}

    getArt(artId: number) {
        return this.http.get<any>(this.rootUrl + artId);
    }
}