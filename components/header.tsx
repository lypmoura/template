"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LayoutDashboard, Pickaxe, ShoppingBasket, LogOut, LogIn, ShoppingCart, ChartPie, Megaphone } from "lucide-react";
import { signOut, signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";

function Header() {
    const { data: session } = useSession();

    return (
        <header className="flex h-20 items-center justify-between">
            <div>
                <Link href={"/"}>
                    <span className="text-3xl font-medium">nexo<strong className="text-primary">.</strong>gg</span>
                </Link>
            </div>
            <div>
                {session ? (
                    <div className="flex items-center gap-2">
                        <Button size={"icon"} className="rounded-2xl size-10" variant={"outline"}>
                            <ShoppingCart />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar className="size-10 rounded-xl">
                                    <AvatarFallback>{session.user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
                                    <AvatarImage src={session.user?.image as string} />
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mr-8 w-54">
                                <div className="flex items-center gap-2 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer rounded-2xl">
                                    <Avatar className="size-10 rounded-xl">
                                        <AvatarFallback>{session.user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
                                        <AvatarImage src={session.user?.image as string} />
                                    </Avatar>
                                    <div className="truncate">
                                        <span className="truncate">{session.user?.name}</span>
                                        <p className="truncate text-sm text-muted-foreground">{session.user?.email}</p>
                                    </div>
                                </div>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <ChartPie />
                                    Dashboard
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Pickaxe />
                                    Configurações
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <ShoppingBasket />
                                    Meus pedidos
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Megaphone />
                                    Anunciar
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => signOut()} variant="destructive">
                                    <LogOut />
                                    Sair
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ) : (
                    <Button onClick={() => signIn("discord")}>
                        <LogIn />
                        Entrar
                    </Button>
                )}
            </div>
        </header>
    );
}

export default Header;