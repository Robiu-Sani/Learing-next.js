"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();
  const params = useParams();
  return (
    <div>
      <ul>
        <li>
          <Link href={`/home`}>home</Link>
        </li>
        <li>
          <Link href={`/`}>back</Link>
        </li>
        <li>
          <Link href={`/dataFetch`}>dataFetch</Link>
        </li>
        <button onClick={() => router.push("/home")}>go home</button>
      </ul>
      <p>{pathName}</p>
    </div>
  );
}
