import "dotenv/config";
import e from "express";
import enterprise_router from "./http/routes/enterprise-route.js";
import trip_router from "./http/routes/trip_route.js";
import vehicle_router from "./http/routes/vehicle_route.js";
const app = e();

app.use(e.json());
app.use("/enterprise", enterprise_router);
app.use("/trip", trip_router);
app.use("/vehicle", vehicle_router);

app.listen(process.env.API_PORT, () => {
  console.log("Aplicação rodando");
});
