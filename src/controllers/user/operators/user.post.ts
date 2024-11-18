import { User } from "../../../models/tables/user/user";
import { ICreateUser } from "../user.types";


export async function createUser ({email, password, username, userId}:ICreateUser): Promise <User> {
    
    const newUser = await User.create ({
        email: email,
        userName: username,
        password: password,
        userId: userId
    });

    return newUser
}