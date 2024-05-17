import { NextResponse } from "next/server";
import fetch from "node-fetch";

export async function PATCH(req) {
  const { id, data } = await req.json();

  if (!id || !data) {
    return NextResponse.json(
      { message: "User ID and data are required" },
      { status: 400 }
    );
  }

  const token = await getAccessToken();

  try {
    const response = await fetch(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(errorData, { status: response.status });
    }

    const updatedUser = await response.json();
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}

async function getAccessToken() {
  const response = await fetch(
    `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
        grant_type: "client_credentials",
      }),
    }
  );

  const data = await response.json();
  return data.access_token;
}
