import { Controller, Get, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    appService: any;
    constructor(private readonly productService: ProductService) {}
    @Get()
    getHello() {
      return this.productService.getProducts();
    }

    @Put()
    putProduct(): string{
      return this.appService.putProduct();
  }
}
