import { Type } from "class-transformer";
import { IsInt, IsOptional, IsPositive, } from "class-validator";

export class PaginationQueryDto {
    @IsOptional()
    @IsPositive()
    limit: number;

    @IsOptional()
    @IsPositive()
    offset: number;
}
