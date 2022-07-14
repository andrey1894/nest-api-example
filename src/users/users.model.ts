import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { BelongsToMany, HasMany, Column, DataType, Model, Table } from 'sequelize-typescript';

import { UserRoles } from '@/roles/user-roles.model';
import { Post } from '@/posts/posts.model';
import { Role } from '@/roles/roles.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: 1, description: 'id' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'test@test.com', description: 'Email' })
  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @ApiProperty({ example: 'Adriano', description: 'First name' })
  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @ApiProperty({ example: 'Alfaro', description: 'Last name' })
  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @ApiProperty({ example: '123', description: 'Password' })
  @Column({ type: DataType.STRING, allowNull: false })
  @Exclude({ toPlainOnly: true })
  password: string;

  @ApiProperty({ example: 'member', description: 'Member' })
  @Column({ type: DataType.STRING, allowNull: true })
  relationship: string;

  @ApiProperty({ example: '+491711234567', description: 'Phone' })
  @Column({ type: DataType.STRING, allowNull: true })
  phone: string;

  @ApiProperty({ example: 'Adriano_Alfaro.jpg', description: 'Avatar' })
  @Column({ type: DataType.STRING, allowNull: true })
  avatar: string;

  @ApiProperty({ example: 'GOLD', description: 'Membership' })
  @Column({ type: DataType.STRING, allowNull: true })
  membership: string;

  @ApiProperty({ example: true, description: 'Is active or no' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  active: boolean;

  @ApiProperty({ example: true, description: 'Is banned or no' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: 'test', description: 'Why user was banned' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Post)
  posts: Post[];
}
