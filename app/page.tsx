import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>this is ali Saremi project</h1>
      <Link href="/users">click here</Link>
      <ProductCard />
    </main>
  );
}
