import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ILinksAttributes } from "./links.types";
import { User } from "../user/user";

@Table
export class Links extends Model<Links, ILinksAttributes>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare link: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id"
        }
    })
    declare userId: number;

    @BelongsTo(()=>User, {
        foreignKey: "userId"
    })
    declare user: User
}