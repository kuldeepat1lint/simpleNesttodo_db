import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import entities from '../typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'typeOrm',
  entities,
  synchronize: true,
}
