import { Webhook } from "@creem_io/nextjs";

export const POST = Webhook({
    webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,
    onCheckoutCompleted: async ({ customer, product }) => {
        console.log(`${customer?.email} purchased ${product.name}`);
    },
    onGrantAccess: async ({ customer, metadata }) => {
        const userId = metadata?.referenceId as string;
        console.log(userId)
    },
    onRevokeAccess: async ({ customer, metadata }) => {
        const userId = metadata?.referenceId as string;
        console.log(userId)
    },
});