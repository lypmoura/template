"use client"

import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import Sidebar from "../(components)/sidebar";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "@/actions/get-product-details";
import { useSession } from "next-auth/react";
import { getDashboardProducts } from "@/actions/get-dashboard-products";

function DashboardProducts() {
    const { data: session } = useSession();

    const { data: product, isLoading } = useQuery({
        queryKey: ["products", session?.user?.id],
        queryFn: () => getDashboardProducts(session?.user?.id as string),
        enabled: !!session?.user?.id,
    })

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-[calc(100vw-20px)] mx-20 mt-8">
                <div className="w-full flex justify-between">
                    <span className="text-muted-foreground font-medium">Seus produtos</span>
                    <Button>Criar produto</Button>
                </div>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell>Preço</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {product?.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="font-medium">{product.name}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default DashboardProducts;