export async function GET(
  request: Request,
  { params }: { params: { orderId: string } },
) {
  return Response.json({
    orderId: params.orderId,
  })
}
