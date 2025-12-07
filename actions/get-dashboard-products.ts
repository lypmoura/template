"use server";

import { auth } from "@/services/auth";
import { d } from "@/services/drizzle";
import { productsTable, usersTable } from "@/services/drizzle/schemas";
import { eq } from "drizzle-orm";

export const getDashboardProducts = async () => {
    const session = await auth();

    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }

    const product = await d.query.productsTable.findMany({
        where: (
            eq(productsTable.userId, session.user.id)
        ),
    })
    return product;
}