export const AboutComponent = () => {
    return (
        <section id="about" className="about section">

            {/* <!-- Section Title --> */}
            <div className="container px-20 section-title" data-aos="fade-up">
                <h2>About</h2>
                {/* <p>Dynamic Full Stack Web Developer with hands-on experience at Kaigangames Entertainment SDN BHD, specializing in <strong>Angular, Node.js, NestJs and Laravel</strong>. I craft high-performance, responsive web applications and streamline backend systems for speed and scalability. From seamless <strong>API integrations</strong> to solving complex problems with clean, maintainable code, I focus on delivering solutions that delight users and exceed client goals. Always learning, always building—driven by a passion for creating impactful digital experiences.</p> */}

                <div className="text-justify">
                    <p>
                        A results-driven Full Stack Web Developer with over 8 years of experience designing and
                        building scalable, high-performance, and responsive web applications. Proven expertise in the
                        Angular, Vue 3, React, and Next.js ecosystems, alongside Node.js and Laravel — with a strong
                        track record of enhancing application performance by 35%, implementing robust security
                        protocols (JWT, RBAC), and delivering clean, maintainable code in collaborative Agile/Scrum
                        environments.
                    </p>
                    <p className="mt-5">
                        Most recently contributed to large-scale public-sector digital transformation projects under
                        Dinas Komunikasi dan Informatika Provinsi Yogyakarta — including the SPBE GovTech
                        Evaluation System (Next.js, TypeScript, REST API integration), an AI-powered traffic monitoring
                        automation tool (Puppeteer, Cron, PKG), and the provincial JDIH legal documentation portal
                        (Vue 3, Tailwind CSS) — demonstrating the ability to independently ship complex features,
                        integrate government APIs, and deliver zero-dependency tools under compliance and
                        operational deadlines.
                    </p>
                </div>
            </div>
            {/* <!-- End Section Title --> */}

            <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">

                <div className="flex flex-wrap gap-y-4 justify-center">
                    <div className="w-full lg:w-4/12 px-4">
                        <img src="assets/img/profile-img-2.png" className="max-w-full h-auto" alt="" />
                    </div>
                    <div className="w-full lg:w-8/12 px-4 content">
                        <h2>Fullstack Web Developer.</h2>
                        <p className="italic py-3">
                            Passionate and results-driven developer with expertise in Angular, NestJS, Node.js, and Laravel, crafting dynamic web applications with clean architecture and responsive design.
                        </p>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>November 1991</span></li>
                                    {/* <!-- <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> --> */}
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+62 822-1324-7456</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Special Region of Yogyakarta, Indonesia</span></li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>33</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>arief.prasetyo911@gmail.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="py-3">
                            Driven by curiosity and a deep respect for clean code, I approach every project as an opportunity to grow, solve problems creatively, and exceed expectations.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}