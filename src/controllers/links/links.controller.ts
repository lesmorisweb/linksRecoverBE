import { where } from "sequelize";
import { Links } from "../../models/tables/links/links";
import { Response, Request } from "express";


export async function createLinkController (req:Request, res:Response) {
    const link= req.body

    if(!link){
        res.status(400).json();
        return;
        }

    const createLink= await Links.create({
        name: link.name,
        link: link.link,
        userId: link.userId
    });

    res.status(200).json(createLink)
}

export async function deleteLinkController (req:Request, res:Response) {
    const link= req.body

    if(!link){
        res.status(400).json();
        return
    }

    const deleteLink= await Links.findOne({
        where:{
            id: link.id,
            userId: link.userId
        }
        
    });

    if(!deleteLink){
        res.status(404).json()
        return;
    }

    deleteLink.destroy();

    res.status(200).json(deleteLink);
}

export async function getLinkByIdController (req: Request, res: Response) {
    const link = req.body

    if(!link){
        res.status(400).json();
        return
    }

    const linkById= Links.findOne({
        where:{
            id: link.id
        }
    })

    if(!linkById){

        res.status(404).json();
        return
    }

    res.status(200).json(linkById)

}

export async function updateLinkController(req: Request, res: Response) {
    const link= req.body;

    if (!link){

        res.status(400).json();
        return
    }

    const updateLink= await Links.findOne({
        where:{
            id: link.id,
            userId: link.userId
        }
    })

    if(!updateLink){

        res.status(404).json();
        return;
    }

    updateLink.link= link.link,
    updateLink.name= link.name,

    await updateLink.save()

    res.status(200).json(updateLink)

}