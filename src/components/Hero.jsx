import { forwardRef } from "react";
import hero from "../assets/hero.jpg";

const Hero = forwardRef(function Hero({ pinned }, ref) {
  return (
    <section className="hero" ref={ref} aria-label="Band hero image">
      <img className="hero-img" src={hero} alt="Plastic Flower band" />
      <div className="film-grain" aria-hidden="true" />
    </section>
  );
});

export default Hero;
