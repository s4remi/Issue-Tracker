import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>This is ali Saremi project</h1>
      <Link href="/users">go to users page</Link>
      <ProductCard />
    </main>
  );
}
