import { Router } from "express";
import { createLinkController, deleteLinkController, getLinkByIdController, updateLinkController } from "../../links/links.controller";


const router= Router()

router.get("getLinks", getLinkByIdController);
router.post("createLink", createLinkController);
router.delete("deleteLink", deleteLinkController);
router.put("updateLink", updateLinkController);

export default router