import { User } from "../../../models/tables/user/user";
import { IUpdateUser } from "../user.types";


export async function updateUser ( {email, userId, password, username}:IUpdateUser): Promise <User> {
    
    const filteredUser = await User.findOne({
        where: {
            id: userId
        }
    })

    if (!filteredUser){
        throw new Error("Este usuario no existe")
    }

    filteredUser.email = email
    filteredUser.userName = username
    filteredUser. password = password

    await filteredUser.save()

    return filteredUser
}