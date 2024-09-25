import conn from "../conn";
import vehicle_controller from "../../http/controllers/vehicle-controller.js";

const Schema = conn.Schema;

const tripSchema = new Schema({
  vehicle: {
    type: Number,
    Ref: vehicle_controller.index,
  },
  route: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    validate: {
      validator: (v) => {
        return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4} (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/.test(
          v
        );
      },
    },
    required: true,
  },
});

const Trip = conn.model("Trip", tripSchema);

export default Trip;
