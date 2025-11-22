import { NextResponse } from "next/server";

// Facebook will call this endpoint when a user requests data deletion.
// Since this app only uses transient NextAuth JWT sessions and does not
// persist profile data, deletion just means instructing the user to revoke
// the app and invalidating any active session (handled automatically on revoke).

export async function POST(req: Request) {
  try {
    // Facebook may send a signed_request or user_id depending on configuration.
    // We do not store user data, so we don't need to look anything up.
    // Still, we parse the body to consume the request cleanly.
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      await req.json(); // consume
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const text = await req.text(); // consume form payload
      // Optionally parse key=value pairs if desired; not needed here.
    }

    // Return a confirmation_code per Facebook data deletion protocol.
    return NextResponse.json({
      status: "success",
      confirmation_code: "USER_DATA_DELETION_" + Date.now(),
      details:
        "No persistent user data stored. Revoking app access removes remaining session tokens.",
    });
  } catch (e) {
    return NextResponse.json({
      status: "success",
      confirmation_code: "USER_DATA_DELETION",
      details: "No persistent user data stored.",
    });
  }
}

// GET can provide human‑readable instructions or status URL.
export async function GET() {
  return NextResponse.json({
    status: "no-user-data-stored",
    instructions:
      "To delete your data: 1) Log out. 2) Go to Facebook > Settings & Privacy > Settings > Apps and Websites. 3) Find this app and Remove it. This revokes tokens; we store no additional data.",
    more_info: "/data-deletion",
  });
}
