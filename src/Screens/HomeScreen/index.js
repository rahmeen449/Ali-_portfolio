import React from 'react'
import './style.css'
import ali from './img/Ali Tahir.png'
import project1 from './img/project1.svg'
import project2 from './img/project2.svg'
import project3 from './img/project3.svg'
import project4 from './img/project4.svg'
import project5 from './img/project5.png'
const HomeScreen = () => {
    return (
        <div>
            {/* //////////////////    NAV-BAR    ////////////////// */}
            <div className='nav-bar'>
                <div className='part-one'>
                    <img src={ali} className='ali' />
                    <div className='name'><b> Ali Tahir </b></div>
                </div>
                <ul className='part-two'>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>

            {/* ////////////      HOME PAGE     //////////////////// */}
            <div className='home-page'>
                <div className='intro'>
                    <b>Hey, I am Ali Tahir</b>
                </div>
                <div className='line'>
                    A self-motivated Full Stack Developer, who has hands on experience in creating explorative websites.
                </div>
                <button className='btn'><b><a href="#projects">PROJECTS</a></b></button>
            </div>

            {/* ///////////////     ABOUT ME      /////////////// */}
            <div className='main-abt' id="about">
                <div className='about'>
                    <div className='abt'><b>  ABOUT ME </b></div>
                    <div className='abt-line'>
                        Here you will find more information
                        about me, what I do, and my current
                        skills mostly in terms <br />  of programming
                        and technology
                    </div>
                </div>
                <div className='skills-know'>
                    <div className='to-know'>
                        <div className='know-heading'>
                            <b> Get to know me! </b>
                        </div>
                        <div>
                            <div className='know-content'>
                                I'm a  Full Stack Developer building the
                                Websites and Web Applications that leads to the success
                                of the overall product. Check out some of my work in the Projects section.
                            </div>
                            <div className='know-content'>
                                I also like sharing content related to the stuff that
                                I have learned over the years so it
                                can help other people of the Dev Community. Feel free to
                                Connect or Follow me on my Linkedin where I post useful
                                content related to Programming
                            </div>
                            <div className='know-content'>
                                I'm open to Job opportunities where I can contribute,
                                learn and grow. If you have a good opportunity that matches my skills
                                and experience then don't hesitate to contact me.
                            </div>
                        </div>
                        <button className='btn btn2'><b><a href="#contact">CONTACT </a></b></button>
                    </div>

                    <div className='my-skills'>
                        <div className='skills-heading'><b> My Skills</b></div>
                        <div className='skills-names'>
                            <div className='skill-one'>
                                <div className='html'>HTML</div>
                                <div className='html'>CSS</div>
                                <div className='html'>Javascript</div>
                                <div className='html'>React </div>
                            </div>
                            <div className='skill-one'>
                                <div className='html'>SASS</div>
                                <div className='html'>GIT</div>
                                <div className='html'>Github</div>
                                <div className='html'>Responsive Design</div>
                            </div>
                            <div className='skill-one'>
                                <div className='html'>SEO</div>
                                <div className='html'>Terminal</div>
                                <div className='html'>Express Basics</div>
                                <div className='html'>SQL Basics</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* //////////////      PROJECTS       ///////////////// */}

            <div className='main-projects' id="projects">
                <div className='project-head'><b> My Projects</b></div>
                <div className='projects'>
                    <div className='project1'>
                        <img src={project1} className='project-img' />
                        <div className='project1-content'>
                            <div className='project1-heading'><b> Uptok</b></div>
                            <div className='project1-para'>
                                It is an E-commerce web platform that helps users to
                                communicate via video chat on a Shopify store. I handled
                                both the front-end and back-end sides. It was challenging
                                for me to integrate the Agora video and confirm approval
                                from the Shopify app. I created a dashboard for shopping
                                with the sales studio and customers review. I’ve integrated
                                multiple APIs and Added payments
                                methods using React, NodeJS, Typescript, and PostgreSQL.
                            </div>
                        </div>

                    </div>

                    <div className='project1'>
                        <img src={project2} className='project-img' />
                        <div className='project1-content'>
                            <div className='project1-heading'><b>Swvl</b></div>
                            <div className='project1-para'>
                                Swvl is a Multinational mobility as service provider that offers tech-enabled ridesharing services. I worked on the tracking system using Amplitude to track every action of the customers
                                with the help of collaborative analytics.
                            </div>
                        </div>

                    </div>

                    <div className='project1'>
                        <img src={project4} className='project-img' />
                        <div className='project1-content'>
                            <div className='project1-heading'><b>Best Price</b></div>
                            <div className='project1-para'>
                                BestPrice will help you to automatically find and apply
                                coupon codes when you shop online with BestPrice. This
                                chrome extension can be downloaded by both windows and Mac users.
                                I developed this chrome extion using NodeJS with Javascript.
                            </div>
                        </div>

                    </div>

                    <div className='project1'>
                        <img src={project3} className='project-img' />
                        <div className='project1-content'>
                            <div className='project1-heading'><b>Apex:E3</b></div>
                            <div className='project1-para'>
                                APEX:E3 is a provider of multi-asset analytics tools for
                                retail and institutional investors. I have divided it
                                into three pages (A:E3, Defi, Screener), and created
                                multiple columns for price changes, added filters to
                                analyze the price variation in the market according to
                                ascending and descending order. On the Defi page, I've
                                added the link regarding the current status in the graph. Technologies
                                I've used React, Express, Ant Design, and Material UI.
                            </div>
                        </div>

                    </div>

                    <div className='project1'>
                        <img src={project5} className='project-img' />
                        <div className='project1-content'>
                            <div className='project1-heading'><b>PopSpot</b></div>
                            <div className='project1-para'>
                                PopSpot is a social media mobile application where you
                                can find content that you can't see anywhere else from
                                all of your favorite creators. Follow creators and
                                access their exclusive benefits by becoming a superfan.
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* /////////////       CONTACT INFORMATION        ////////////////////////// */}
            <div className='contact-info' id="contact">
                <div className='contact-content'>
                    <div className='contact-heading'>
                        <b>   Send me a message! </b>
                    </div>
                    <div className='contact-para'>
                        Got a question or proposal, or just want to say hello? Go ahead.
                    </div>
                </div>
                <div className='contactForm'>
                    <div className='name-email'>
                        <div className='input1'>
                            <label className='label'>Your Name</label><br />
                            <input type="text" className='placeholder' placeholder="Enter your name" />
                        </div>
                        <div>
                            <label className='label'>Email Address</label><br />
                            <input type="text" className='placeholder' placeholder="Enter your email address" />
                        </div>
                    </div>
                    <div>
                        <label className='label'>Your Message</label><br />
                        <input type="text" className='placeholder2' placeholder="Hi, I think we need a design system for our products at Company X. How soon can you
                        hop on to discuss this?" />
                    </div>
                    <button className='btn'><a href="#projects"><b>SEE MY WORK</b></a></button>
                </div>
            </div>

        </div >
    );
}
export default HomeScreen;