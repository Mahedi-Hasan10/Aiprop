// pages/api/updateUser.js
import { getSession } from "@auth0/nextjs-auth0";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const session = getSession(req, res);
  if (!session || !session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { user } = session;
  const { name, email, password } = req.body;

  try {
    const tokenResponse = await axios.post(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
        grant_type: "client_credentials",
      }
    );

    const token = tokenResponse.data.access_token;

    await axios.patch(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${user.sub}`,
      { name, email, password },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
