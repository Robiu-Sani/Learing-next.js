import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //this is the path where i want to sent user
  return NextResponse.redirect(new URL("/home", request.url)); // it will change url path
  //return NextResponse.rewrite(new URL("/sdfsd", request.url)); // it will not change url path

  // there you can use any condition also.
  //   for geting cookies
  // const cookies = requesr.cookies.get('token')
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*", //
};

// export const config = {
//     matcher: ['/about/:path*', '/dashboard/:path*'],
//   }
