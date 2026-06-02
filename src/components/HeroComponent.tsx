import { ReactTyped } from "react-typed";
import bgImage from "../assets/img/hero-bg-3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function HeroComponent() {
    return (
        <section id="hero" className="hero section light-background">
            <img src={bgImage} alt="" />
            <div className="container mx-auto px-4" data-aos="zoom-out">
                <div className="flex justify-center">
                    <div className="w-full lg:w-9/12">
                        <h2>Arief Budi Prasetyo</h2>
                        <p>
                            I'm{" "}
                            <ReactTyped
                                strings={[
                                    "Fullstack Developer",
                                    "Frontend Developer",
                                    "Backend Developer",
                                    "Freelancer",
                                ]}
                                typeSpeed={60}
                                backSpeed={40}
                                loop
                                className="typed text-black font-medium italic"
                            />
                        </p>
                        <div className="social-links">
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.linkedin.com/in/arief-budi-prasetyo-306465122/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}