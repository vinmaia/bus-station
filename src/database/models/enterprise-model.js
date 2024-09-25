import conn from "../conn";

const Schema = conn.Schema;

const enterpriseSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (v) => v.length >= 2,
      required: true,
    },
  },
  cnpj: {
    type: String,
    validate: {
      validator: (v) => {
        return /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(v);
      },
    },
    required: true,
  },
  password: {
    type: String,
    validate: {
      validator: (v) => {
        return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
      },
    },
    required: true,
  },
});

const Manager = conn.model("Manager", enterpriseSchema);

export default Manager;
