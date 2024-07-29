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
#### Roals
- We have to add "use client" top of the function for which component we want to add any extra function. like = <br/>
"use client";
### Basic Routing
- foldername/page.jsx

### dynamic Routing
- [foldername]/page.jsx

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
