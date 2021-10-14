import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { PixaBay, SearchPixaResponse } from "../interface/pixa.interface";
@Injectable({
    providedIn: 'root'
  })
export class MainService{

    private apiKey:string       = "20499174-2ed7deefb85cbc785ede711c0";
    private urlBase:string      = "https://pixabay.com/api/";
    private _historial:string[] = [];
    public resultados: PixaBay[] = [];

    get historial(){
        return [...this._historial];
    }
    constructor(private http:HttpClient){}

    buscarGifs( termino:string ){
        termino = termino.trim().toLowerCase();
        
        if(!this._historial.includes(termino) ){
            this._historial.unshift( termino );
            this._historial = this._historial.splice(0, 9);
        }
        const params = new HttpParams()
            .set('key', this.apiKey )
            .set('q', termino);
            // .set("per_page", "10");
        
        this.http.get<SearchPixaResponse>( `${this.urlBase}`,{params} )
            .subscribe( resp => {
                this.resultados = resp.hits;
                console.log(this.resultados);
            } )
        
    }
}