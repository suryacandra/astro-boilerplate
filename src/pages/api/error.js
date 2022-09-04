export async function post(params, request) {
    const { message } = await request.json();
    return new Response(JSON.stringify({message}), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }