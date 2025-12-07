"use client"

import { getProducts } from "@/actions/get-products";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircle, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Home() {
	const { data: products, isLoading } = useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	})

	return (
		<div className="mx-40">
			<Header />
			<section>
				<span className="text-muted-foreground font-semibold flex items-center gap-2">
					Produtos recentes
					{isLoading && <LoaderCircle className="animate-spin text-primary size-6" />}
				</span>
				<div className="mt-2 space-x-2 grid grid-cols-6">
					{products?.map((product) => (
						<Link href={`/p/${product.id}`} key={product.id}>
							<div className="p-2 space-y-2 border rounded-2xl flex flex-col hover:scale-105 transition-all">
								<Image 
									className="w-full h-40 rounded-2xl" 
									src={product.imageUrl ?? ""} 
									height={100} 
									width={100} 
									alt={product.name ?? ""}
								/>
								<Button>
									<ShoppingCart />
									Carrinho
								</Button>
							</div>
						</Link>
					))}
				</div>
			</section>
		</div >
	);
}

export default Home;