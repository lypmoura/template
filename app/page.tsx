import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreemCheckout } from "@creem_io/nextjs";

function Home() {
	return (
		<div className="flex flex-col h-screen items-center justify-center space-y-2">
			<Badge variant={"secondary"} className="w-50">Felype Moura - Boilerplate</Badge>
			<CreemCheckout productId="prod_YOUR_PRODUCT_ID">
				<Button className="w-50">Subscribe Now</Button>
			</CreemCheckout>
		</div >
	);
}

export default Home;