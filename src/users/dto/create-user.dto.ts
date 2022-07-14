import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'test@test.com', description: 'email' })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({ example: 'Adriano', description: 'First name' })
  @IsString({ message: 'Must be string' })
  @Length(3, 255, { message: 'Must be more 3 abd less 255' })
  readonly firstName: string;

  @ApiProperty({ example: 'Alfaro', description: 'Last name' })
  @IsString({ message: 'Must be string' })
  @Length(3, 255, { message: 'Must be more 3 abd less 255' })
  readonly lastName: string;

  @ApiProperty({ example: '123', description: 'password' })
  @IsString({ message: 'Must be string' })
  @Length(3, 16, { message: 'Must be more 3 abd less 16' })
  readonly password: string;

  @ApiProperty({ example: 'member', description: 'Member' })
  readonly relationship?: string;

  @ApiProperty({ example: '+491711234567', description: 'Phone' })
  readonly phone?: string;

  @ApiProperty({ example: 'Adriano_Alfaro.jpg', description: 'Avatar' })
  readonly avatar?: string;

  @ApiProperty({ example: 'GOLD', description: 'Membership' })
  readonly membership?: string;
}
