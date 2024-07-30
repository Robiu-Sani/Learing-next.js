import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL("/home", request.url)); //this is the path where i want to sent user
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*", //
};

// export const config = {
//     matcher: ['/about/:path*', '/dashboard/:path*'],
//   }
