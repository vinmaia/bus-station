import e from "express";
import enterprise_controller from "../controllers/enterprise-controller.js";

const router = e.Router();

router.post("/", enterprise_controller.store);
router.get("/", enterprise_controller.index);
router.get("/:id", enterprise_controller.show);
router.put("/", enterprise_controller.update);
router.delete("/", enterprise_controller.destroy);

export default router;
