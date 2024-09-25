import conn from "../conn.js";
import enterprise_controller from "../../http/controllers/enterprise-controller.js";

const Schema = conn.Schema;

const vehicleSchema = new Schema({
  enterprise: {
    type: String,
    Ref: enterprise_controller.index,
    required: true,
  },
  capacity: {
    type: Number,
    validate: {
      validator: (v) => {
        return /^3[0-9]|4[0-9]|50)$/.test(v);
      },
    },
    plate: {
      type: String,
      validate: {
        validator: (v) => {
          return /^[A-Z]{3}-\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$/.test(v);
        },
      },
    },
  },
});

const Vehicle = conn.model("Vehicle", vehicleSchema);

export default Vehicle;
