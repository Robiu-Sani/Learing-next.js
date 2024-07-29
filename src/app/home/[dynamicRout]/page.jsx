"use client";
// import { useParams } from "next/navigation";

export default function Dynamicpage({ params }) {
  // const params = useParams();
  return <div>{params.dynamicRout}</div>;
}
