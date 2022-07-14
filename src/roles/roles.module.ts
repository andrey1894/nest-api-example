import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from '@/users/users.model';

import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { UserRoles } from './user-roles.model';
import { Role } from './roles.model';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  exports: [RolesService],
})
export class RolesModule {}
