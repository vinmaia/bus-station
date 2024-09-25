import e from "express";
import trip_controller from "../controllers/trip-controller.js";

const router = e.Router();

router.post("/", trip_controller.store);
router.get("/", trip_controller.index);
router.get("/:id", trip_controller.show);
router.put("/", trip_controller.update);
router.delete("/", trip_controller.destroy);

export default router;
