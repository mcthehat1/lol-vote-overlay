export async function POST(req) {
  const { champion } = await req.json();
  const votes = await req.kv.get("votes") || {};
  votes[champion] = (votes[champion] || 0) + 1;
  await req.kv.set("votes", votes);
  return Response.json({ success: true });
}
