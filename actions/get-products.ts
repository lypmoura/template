"use server"

import { d } from "@/services/drizzle";

export async function getProducts() {
    const products = d.query.productsTable.findMany();
    return products;
}