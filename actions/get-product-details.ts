"use server";

import { d } from "@/services/drizzle";
import { productsTable, usersTable } from "@/services/drizzle/schemas";
import { eq } from "drizzle-orm";

export const getProductDetails = async (id: string) => {
    const product = await d.query.productsTable.findFirst({
        where: (
            eq(productsTable.id, id)
        ),
    })
    return product;
}