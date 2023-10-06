"use client"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import OurWork from "@/components/OurWork-backup";
import VanillaProducts from "@/components/Vanilla";
import Filler from "@/components/Filler";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Product />
      <OurWork />
      <VanillaProducts />
      <Filler />
    </main>
  );
}
