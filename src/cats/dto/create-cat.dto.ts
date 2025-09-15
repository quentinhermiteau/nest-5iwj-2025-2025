import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the cat',
    example: 'Whiskers',
  })
  name: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The age of the cat',
    example: 3,
  })
  age: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The breed of the cat',
    example: 'Siamese',
  })
  breed: string;
}
