import { Carousel } from '../components';
import { carouselImages } from '../data';
import './Home.css';

function Home() {
  return (
    <main className="home page-enter">
      <section className="hero">
        <div className="hero-content">
          <Carousel images={carouselImages} autoAdvanceInterval={5000} />

          <img
            src="/images/about/Azukios-Signature.PNG"
            alt="Azukios"
            className="hero-logo"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
