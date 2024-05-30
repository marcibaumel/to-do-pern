import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { databaseUsername, databasePassword, databasePort } from './config';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: Number.parseInt(databasePort),
    username: databaseUsername,
    password: databasePassword,
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
