"use client";

import { getProducts } from "@/actions/get-products";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

function Products() {
    const { data: products } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    })

    return (
        <div>
            {products?.map((product) => (
                <div key={product.id} className="p-2 space-y-2 border rounded-2xl flex flex-col hover:scale-105 transition-all">
                    <Image className="w-full h-40 rounded-2xl" src={product.imageUrl} height={100} width={100} alt={product.name} />
                    <Button>Comprar</Button>
                </div>
            ))}
        </div>
    );
}

export default Products;