import { apiClient } from "./config"

export const apiSignUp = async(payload) =>{
    return apiClient.post("/users/signup", payload);
}

export const apiLogIn = async(payload) =>{
    return apiClient.post("/users/login" , payload);
}

