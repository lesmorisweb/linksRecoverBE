import { Response, Request } from "express";
import { createUser } from "./operators/user.post";
import { deleteUser } from "./operators/user.delete";
import { getUserById } from "./operators/user.get";
import { updateUser } from "./operators/user.put";
import { json } from "sequelize";

export async function createUserController ( req: Request, res: Response) {
    const user= req.body

    if(!user){
        res.status(400).json();
        return;
    }

    const createdUser= await createUser({
        email: user.email,
        password: user.password,
        userId: user.userId,
        username: user.userName
    });

    res.status(200).json(createdUser)
}

export async function deleteUserController( req: Request, res: Response) {
    const user= req.body

    if(!user){
        res.status(400).json();
        return;
    }

    const userDeleted= await deleteUser({
        user: user,
        userId: user.id
    })
    res.status(200).json(userDeleted);
}

export async function getUserByIdController(req: Request, res: Response) {
    const user= req.body

    if(!user){
        res.status(400).json();
        return;
    }

    const userById= await getUserById({
        id: user.id
    })

    res.status(200).json(userById);
}

export async function updateUserController( req: Request, res:Response) {
    const user= req.body

    if(!user){
        res.status(400).json();
        return;
    }

    const updeatedUserController= updateUser({
        email: user.email,
        password:user.password,
        userId: user.userId,
        username: user.userName
    
    })

    res.status(200).json(updeatedUserController)

    
}