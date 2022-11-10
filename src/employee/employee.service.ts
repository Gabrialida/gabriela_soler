import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {

    @Get()
    getEmployee(): string{
        return 'Acá devuelve lista de empleado'
    }
}