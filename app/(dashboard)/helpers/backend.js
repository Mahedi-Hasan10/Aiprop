import { del, get, post } from "./api";

export const fetchTenant = (data) => get("/tenants", data);
export const postTenant = (data) => post("/tenants", data);
