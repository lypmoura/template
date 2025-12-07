"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChartPie, Package, User2, WalletCards } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

function Sidebar() {
    const { data: session} = useSession();

    return (
        <aside className="flex flex-col w-50 h-screen p-2 border-r">
            <div className="flex justify-center items-center h-20">
                <Link href={"/"}>
                    <span className="text-3xl font-medium">nexo<strong className="text-primary">.</strong>gg</span>
                </Link>
            </div>
            <div>
                <Button variant="ghost" className="w-full justify-start group">
                    <ChartPie className="group-hover:text-primary transition-all" />
                    Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start group">
                    <WalletCards className="group-hover:text-primary transition-all" />
                    Vendas
                </Button>
                <Button variant="ghost" className="w-full justify-start group">
                    <Package className="group-hover:text-primary transition-all" />
                    Produtos
                </Button>
                <Button variant="ghost" className="w-full justify-start group">
                    <User2 className="group-hover:text-primary transition-all" />
                    Clientes
                </Button>
            </div>
            <div className="mt-auto">
                <div className="flex items-center gap-2 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer rounded-2xl">
                    <Avatar className="size-10 rounded-xl">
                        <AvatarFallback>{session?.user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
                        <AvatarImage src={session?.user?.image as string} />
                    </Avatar>
                    <div className="truncate">
                        <span className="truncate">{session?.user?.name}</span>
                        <p className="truncate text-sm text-muted-foreground">{session?.user?.email}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;