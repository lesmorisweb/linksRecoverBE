import { User } from "../../../models/tables/user/user";
import { IDeleteUser } from "../user.types";


export async function deleteUser( {user, userId}:IDeleteUser): Promise<User> {
    
    const filteredUser = await User.findOne({
        where: {
            id: userId
        }
    })

    if (!filteredUser){ 
        throw new Error("Este usuario no existe")
    }

    await filteredUser.destroy()

    return filteredUser
}