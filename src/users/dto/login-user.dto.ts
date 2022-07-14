import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ example: 'test@test.com', description: 'email' })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({ example: '123', description: 'password' })
  @IsString({ message: 'Must be string' })
  @Length(3, 16, { message: 'Must be more 3 abd less 16' })
  readonly password: string;
}
