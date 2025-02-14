// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req:NextRequest) {
    const token = await getToken({ req });

    // Allow access to `/admin` route only for authenticated admins
    if (req.nextUrl.pathname.startsWith("/admin")) {
        if (!token || token.isAdmin !== true) {
            return NextResponse.redirect(new URL("/auth/signin", req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin"],
};
