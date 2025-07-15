import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BadgeDesigner from "~/components/BadgeDesigner";

export const meta: MetaFunction = () => {
  return [
    { title: "Badge Designer" },
    { name: "description", content: "Design your custom badges" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const productId = url.searchParams.get("product");
  
  // Add headers for iframe embedding
  const headers = new Headers();
  headers.set("X-Frame-Options", "ALLOWALL");
  headers.set("Content-Security-Policy", "frame-ancestors *");
  headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
  
  return json({ productId, timestamp: Date.now() }, { headers });
};

export default function Index() {
  const { productId } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-50">
      <BadgeDesigner productId={productId} />
    </div>
  );
}
