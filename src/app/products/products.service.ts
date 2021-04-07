import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; 
import { Product } from './model/product';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

    private readonly url: string = "http://localhost:8080/api/products/";

    constructor(private http: HttpClient) {}

    public getUrl(): string {
        return this.url;
    }

    public getProducts(): Observable<Product> {
        return this.http.get<Product>(this.url);
    }

    public getProductNames(): Observable<String[]> {
        return this.http.get<Product[]>(this.url)
        .pipe(
            map((products) => {
                return products.map((product) => product.name);
            }),
        );
    }
}