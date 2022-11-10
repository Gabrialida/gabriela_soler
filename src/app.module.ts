import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './=/product/product.service';
import { ProductController } from './=/product/product.controller'
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductController,
    EmployeeController
  ],
  providers: [
    AppService,
    ProductService,
    EmployeeService
  ],
})
export class AppModule {}
