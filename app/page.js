import Blogs from "@/components/Blogs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Header />
        <Hero />
        <Blogs />
      </div>
    </main>
  );
}
