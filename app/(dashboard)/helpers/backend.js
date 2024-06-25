import { del, get, post, put } from "./api";

//auth
export const register = (data) => post("/register", data);
export const userLogin = (data) => post("/login", data);
export const fetchProfile = (data) => get("/profile", data);
//Dashboard
export const fetchWorkers = (data) => get("/workorders/active", data);
export const fetchTcalls = (data) => get("/tenantcalls/recent", data);

// Tenants
export const fetchTenant = (data) => get("/tenants", data);
export const postTenant = (data) => post("/tenants", data);
export const updateTenant = (data) => put("/tenants", data);
export const delTenant = (data) => del("/tenants", data);

//Repairman
export const fetchRepairmen = (data) => get("/repairmen", data);
export const postRepairmen = (data) => post("/repairmen", data);
export const updateRepairmen = (data) => put("/repairmen", data);
export const delRepairmen = (data) => del("/repairmen", data);
