"use client"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import OurWork from "@/components/OurWork";
import VanillaProducts from "@/components/Vanilla";
import Filler from "@/components/Filler";
import Quality from "@/components/Quality";
import Develop from "@/components/Develop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Product />
      <OurWork />
      <VanillaProducts />
      <Quality />
      <Develop />
      <Filler />
    </main>
  );
}
