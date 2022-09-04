export async function get(params, request) {
    return new Response(JSON.stringify({ ok: true, param: params, req: request }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }