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
#### Roals
- We have to add "use client" for which component we want to add any extra function.
### Basic Routing
- foldername/page.jsx
  for add link
-  import Link from "next/link";
- <Link href={`/home`}>home</Link>
### dynamic Routing
- [foldername]/page.jsx
