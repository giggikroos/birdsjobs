import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navbar/Navbar';
import SearchBar from '@/components/searchbar/SearchBar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SearchBar />
    </main>
  );
}
