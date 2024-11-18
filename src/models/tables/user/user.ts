
import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { IUsersAttributes } from "./user.types";
import { Links } from "../links/links";


@Table
export class User extends Model<User, IUsersAttributes>{

    @Column({
        type: DataType.STRING,
        allowNull: false,
        })
        declare userName: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare email: string;

    @HasMany(()=>Links, {
        foreignKey: "linksId"
    })
    declare links: Links[]
}