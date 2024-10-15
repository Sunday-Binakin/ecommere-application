import { apiClient } from "./config"

export const apiGetProducts = async () => apiClient.get("/products")//get all products
export const apiGetSingleProduct = async (slug) => apiClient.get(`/products/${slug}`)//get a single product
export const apiAddProduct = async (payload) => apiClient.post("/products", payload);//add a product