import { User } from "../../models/tables/user/user"

export interface IGetUserById {
    id: number
}

export interface ICreateUser {
    username: string,
    password: string,
    email: string,
    userId: number
}

export interface IUpdateUser {
    username: string,
    password: string,
    email: string,
    userId: number
}

export interface IDeleteUser {
    userId: number,
    user: User
}
