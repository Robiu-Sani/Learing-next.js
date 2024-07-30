## Next.js Installetion or create a next app 
```
npx create-next-app@latest
√ What is your project named? ... my-app
√ Would you like to use TypeScript? ... No
√ Would you like to use ESLint? ...  Yes
√ Would you like to use Tailwind CSS? ...Yes
√ Would you like to use `src/` directory? ...  Yes
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias (@/*)? ... No 
```

## Run app
```
cd my-app
npm run dev
```
#### Folder Rools
- every fulder name will be a route and there must have to be page.js/tsx/jsx
- if i don't need router then i have to create foulder name in a first brecket like = (foulder name)
- for dynamic route! foldername will be like [foldername]
- for all segment dynamic route like /dynamic/otherroute ! foldername will be like [...foldername]
#### File Rools
- fro every folder == page.jsx
- for root file == layout.jsx
- for loading == loading.jsx
- for error == error.jsx
- private route == middleware.jsx
- for env file == .env.local and excess  data process.env.DB_HOST
#### Roals
- We have to add "use client" top of the function for which component we want to add any extra function. like = <br/>
"use client";
- in nextjs Layout.js is working like react root component
### Basic Routing
- foldername/page.jsx

### dynamic Routing
- [foldername]/page.jsx
- [...foldername]/page.jsx

### Routiing navigations
  ##### simple navigations
  import Link from "next/link"; 
  '<Link href={`/home`}>home</Link>'<br/>
  '<Link href={`/home/about/anypathname`}>routname</Link>'<br/>
  ##### other way
  const router = useRouter();<br/>
  <button onClick={() => router.push("/home")}>go home</button><br/>
  ##### dynamic navigations
  '<Link href={`/pathname/${dynamicurl}`}>details</Link>'<br/>
  first get a props name is 'params' like const functionname({params}){ other things} <br/>
  - concole.log(params.dynamicFolderName)
  - this params we get from next js<br/>
  ##### other way
  import { useParams } from "next/navigation";<br/>
  const params = useParams();<br/>
  ##### to get url path
  import { usePathname } from "next/navigation";<br/>
  const pathName = usePathname();<br/>




  ## Error page 
  ```
"use client";
import React from "react";

export default function Error() {
  return <div>Eerror</div>;
}
```
  ## Loading page 
  ```
import React from "react";

export default function loading() {
  return <div>loading</div>;
}
```
  ## middle ware page page 
  ```
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

```

  ## data fetching
  ```
import React from "react";

const getPost = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
};

const getpostpage = async () => {
  const alldata = await getPost();
  return (
    <div>
      {alldata?.map((data, idx) => (
        <p key={idx}>{data.name.common}</p>
      ))}
    </div>
  );
};
export default getpostpage;

```
