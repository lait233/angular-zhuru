import { Injectable } from '@angular/core';
import { Product, ProductService } from "./product.service";
import { LoggerService } from "./logger.service";

@Injectable()
export class AnotherProductService implements ProductService {

    getProduct(): Product {
        return new Product( 1, 'samsung Note7', 4999, 'samsung最新款' );
    }

    constructor( public logger: LoggerService ) {}

}
