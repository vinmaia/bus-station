import e from "express";
import vehicle_controller from "../controllers/vehicle-controller.js";

const router = e.Router();

router.post("/", vehicle_controller.store);
router.get("/", vehicle_controller.index);
router.get("/:id", vehicle_controller.show);
router.put("/", vehicle_controller.update);
router.delete("/", vehicle_controller.destroy);

export default router;
