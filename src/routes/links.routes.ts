import { Router } from "express";
import { createLinkController, deleteLinkController, getLinkByIdController, updateLinkController } from "../controllers/links/links.controller";


const router= Router();

router.post ( "/createLink", createLinkController );
router.delete ( "/deleteLink", deleteLinkController );
router.get ( "/getLink", getLinkByIdController );
router.put ( "/updateLink", updateLinkController );

export default router