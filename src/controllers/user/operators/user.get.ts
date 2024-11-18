import { IGetUserById } from "../user.types";
import { User } from "../../../models/tables/user/user";


export async function getUserById({id}:IGetUserById):Promise<User> {
    
    
        const filteredUser = await User.findOne({
            where: {
                id: id
            }
        })

        if(!filteredUser){

            console.log("El usuario no existe")
            throw new Error ("El usuario no existe")   
        }

        return filteredUser
    
}