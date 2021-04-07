import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './products.service';
import { ProductsComponent } from './products-component/products.component';

@NgModule({
    declarations: [ProductsComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    exports: [ProductsComponent],
    providers: [ProductService]
})
export class ProductsModule {}