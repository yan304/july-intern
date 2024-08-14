import { publicRoutes, privateRoutes } from "./routes"
import { createBrowserRouter } from "react-router-dom";

const userCheck = localStorage.getItem("user");

const routes = userCheck === "true" ? [...publicRoutes, ...privateRoutes] : publicRoutes;

export const router = createBrowserRouter(routes)
