import { IsNotEmpty, IsString, IsOptional, IsNumber, IsPositive, IsInt, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Laptop HP', description: 'Nombre del producto' })
  @IsString()
  @IsNotEmpty({ message: 'El nombre del producto es obligatorio' })
  nombre: string;

  @ApiPropertyOptional({ example: 'Computador portátil de 15 pulgadas', description: 'Descripción del producto' })
  @IsOptional()
  @IsString()
  descripcion?: string;

  @ApiProperty({ example: 1200.5, description: 'Precio del producto (debe ser mayor que 0)' })
  @IsNumber({}, { message: 'El precio debe ser un número' })
  @IsPositive({ message: 'El precio debe ser mayor que 0' })
  precio: number;

  @ApiProperty({ example: 5, description: 'Cantidad disponible (entero positivo)' })
  @IsInt({ message: 'La cantidad debe ser un número entero' })
  @Min(1, { message: 'La cantidad debe ser al menos 1' })
  cantidad: number;
}
