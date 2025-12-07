"use client";

import { getProductDetails } from "@/actions/get-product-details";
import Header from "@/components/header";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowDown, PiggyBank, WalletCards } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShinyButton } from "@/components/ui/shiny-button";

function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    const { data: product, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductDetails(id),
    })

    return (
        <div className="mx-40">
            <Header />
            <div className="flex gap-10">
                <div>
                    <Image
                        className="size-[300px] rounded-2xl"
                        src={product?.imageUrl ?? "/produto1.jpg"}
                        height={300}
                        width={300}
                        alt={product?.name ?? ""}
                    />
                </div>
                <div className="h-[300px] flex-1">
                    <div className="h-full flex flex-col">
                        <h1 className="text-2xl font-medium">{product?.name}</h1>
                        <p className="text-muted-foreground">{product?.description}</p>
                        <div className="flex items-center gap-2 mt-auto">
                            <span className="text-primary text-xl font-semibold">{product?.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <ShinyButton>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            Comprar
                                            <ArrowDown className="size-4" />
                                        </div>
                                    </ShinyButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <PiggyBank className="text-primary" />
                                        Pix
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <WalletCards className="text-primary" />
                                        Cartão
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;