"use client"

import { SessionProvider } from "next-auth/react"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/react-query"

export function Providers({
    children,
    session,
}: {
    children: React.ReactNode
    session?: any
}) {
    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </SessionProvider>
    )
}
