import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Search />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
