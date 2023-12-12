export const dynamic = "force-dynamic"; // defaults to auto
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const res = await fetch("", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  // redirect('https://nextjs.org/')
  return Response.json({ data });
}

export async function POST() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY!,
    },
    body: JSON.stringify({ time: new Date().toISOString() }),
  });

  const data = await res.json();

  return Response.json(data);
}
