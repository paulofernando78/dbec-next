export async function GET(
  request: Request,
  { params }: { params: { paths: string[] } }
) {
  console.log(params);
  try {
    const data = (await import(`./${params.paths.join("/")}.json`)).default;
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Content not found" });
  }
}
