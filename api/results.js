export async function GET(req) {
  const votes = await req.kv.get("votes") || {};
  const sorted = Object.entries(votes).sort((a, b) => b[1] - a[1]);
  return Response.json(sorted);
}
