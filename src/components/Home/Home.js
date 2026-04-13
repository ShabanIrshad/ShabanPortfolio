import homeStyle from "./Home.module.css";
import hero from "../../../src/Assets/hero.svg";
import shaban from "../../../src/Assets/Shaban.png";
import css from "../../Assets/css.png";
import html from "../../Assets/html.png";
import js from "../../Assets/js.png";
import react from "../../Assets/react.png";
import node from "../../Assets/nodejs.png";
import linked from "../../Assets/linked.png";
import tailwind from "../../Assets/tailwind.png";
import mongo from "../../Assets/mongodb.svg";
import insta from "../../Assets/instagram.png";
import bootstrap from "../../Assets/bootstrap.jpg";
import git from "../../Assets/gi.png";
import firebase from "../../Assets/fire.png";
import postman from "../../Assets/postman.webp";
import vscode from "../../Assets/vscode.png";
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.png";
import link from "../../Assets/link.png";
import emailPic from "../../Assets/email.png";
import webDev from "../../Assets/webDevelopment.jpg";
import genAi from "../../Assets/generativeAI.jpg";
import sql from "../../Assets/sql.png";
import sqlServer from "../../Assets/sqlServer.png";
import reactjs from "../../Assets/reactjs.jpg";
import dsfree from "../../Assets/dsfree.png";
import fullStack from "../../Assets/DT24070066.png";
import dsjava from "../../Assets/dsjava.jpg";
import javaBasic from "../../Assets/javaBasic.png";
import sqlData from "../../Assets/sqlData.png";
import ninjaSlayground from "../../Assets/ninjaSlayground.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className={homeStyle.section}>
        <main>
          <div className={homeStyle.heroRight}>
            <img src={hero} alt="hero-image" />
          </div>
          <div className={homeStyle.heroLeft}>
            <h2 className={homeStyle.quote}>hey there!, i'm-</h2>
            <h1 className={homeStyle.name}>Mohd Shaban </h1>
            <p>
              <b className={homeStyle.quote}>Full Stack developer</b>. A
              developer with an interest in Computer Science and{" "}
              <u>web-development</u> tech stacks.
            </p>
            <p className={homeStyle.point}>
              🚀I build applications that are fast, responsive and user
              friendly.
            </p>
            <p className={homeStyle.point}>
              🎉I enjoy turning ideas into real-world full-stack web
              applications.
            </p>
            <div>
              <button>Github</button>
              <button>LinkedIn</button>
            </div>
          </div>
        </main>
        <aside>
          <span className={homeStyle.text}>shabanirshad408@gmail.com</span>
        </aside>
      </section>
      <section id="about" className={homeStyle.about}>
        <h2 className={homeStyle.heading}>A Bit About Me</h2>
        <hr className={homeStyle.horizontalLine}></hr>
        <div className={homeStyle.container}>
          <div className={homeStyle.leftContainer}>
            <div>
              <p>
                Hey! I'm Mohd Shaban, I've been close to a computer since an
                early age, and been passionate about it ever since.
              </p>

              <p>
                I really liked to build stuff using web-development tools, I
                explored how to code myself, fast-forward to today, I do
                programming in various languages and technologies, focusing on
                Web Development projects.
              </p>

              <p>
                I'm interested in building something awesome with code and
                automate tasks with code.
              </p>

              <p>
                {" "}
                When I'm not coding I watch some show on Netflix, or if the
                weather's good, like to travel!{" "}
              </p>
            </div>
          </div>
          <div className={`${homeStyle.rightContainer} ${homeStyle.aibox}`}>
            <div>
              <img src={shaban} alt="my-image" />
            </div>
          </div>
        </div>
      </section>
      <section className={homeStyle.skills}>
        <h2 className={homeStyle.heading}>What I am good at</h2>
        <p className={homeStyle.skillQuote}>
          Technologies I've mastered and use to bring ideas to life
        </p>
        <hr className={homeStyle.horizontalLine}></hr>
        <div className={homeStyle.skillContainer}>
          <div className={homeStyle.core}>
            <h3>Core Technologies</h3>
            <p>My foundation and expertise.</p>
            <ul>
              <li className={homeStyle.js}>
                <div className={homeStyle.skillTitle}>
                  <img src={js} alt="skill" />
                  <p>Javascript</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercentJs}`}
                  >
                    85%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBarJs}`}
                >
                  <div></div>
                </div>
              </li>
              <li className={homeStyle.html}>
                <div className={homeStyle.skillTitle}>
                  <img src={html} alt="skill" />
                  <p>HTML5</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercenthtml}`}
                  >
                    90%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBarhtml}`}
                >
                  <div></div>
                </div>
              </li>
              <li className={homeStyle.css}>
                <div className={homeStyle.skillTitle}>
                  <img src={css} alt="skill" />
                  <p>CSS</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercentcss}`}
                  >
                    90%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBarcss}`}
                >
                  <div></div>
                </div>
              </li>
                <li className={homeStyle.css}>
                <div className={homeStyle.skillTitle}>
                  <img src={sql} alt="skill" />
                  <p>SQL</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercentcss}`}
                  >
                    90%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBarcss}`}
                >
                  <div></div>
                </div>
              </li>
            </ul>
          </div>
          <div className={homeStyle.framework}>
            <h3>Frameworks & Liabraries</h3>
            <p>Tools I love working with.</p>
            <ul>
              <li className={homeStyle.react}>
                <div className={homeStyle.skillTitle}>
                  <img src={react} alt="skill" />
                  <p>React.js</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercentreact}`}
                  >
                    90%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBarreact}`}
                >
                  <div></div>
                </div>
              </li>
              <li className={homeStyle.node}>
                <div className={homeStyle.skillTitle}>
                  <img src={node} alt="skill" />
                  <p>Node.js</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercentnode}`}
                  >
                    80%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBarnode}`}
                >
                  <div></div>
                </div>
              </li>
              <li className={homeStyle.tailwind}>
                <div className={homeStyle.skillTitle}>
                  <img src={tailwind} alt="skill" />
                  <p>Tailwind</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercenttailwind}`}
                  >
                    70%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBartailwind}`}
                >
                  <div></div>
                </div>
              </li>
              <li className={homeStyle.mongo}>
                <div className={homeStyle.skillTitle}>
                  <img src={mongo} alt="skill" />
                  <p>MongoDB</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercentmongo}`}
                  >
                    55%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBarmongo}`}
                >
                  <div></div>
                </div>
              </li>
              <li className={homeStyle.bootstrap}>
                <div className={homeStyle.skillTitle}>
                  <img src={bootstrap} alt="skill" />
                  <p>Bootstrap5</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercentbootstrap}`}
                  >
                    75%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBarbootstrap}`}
                >
                  <div></div>
                </div>
              </li>
            </ul>
          </div>
          <div className={homeStyle.tool}>
            <h3>Tools & Platforms</h3>
            <p>Essential tools in my workflow.</p>
            <ul>
              <li className={homeStyle.github}>
                <div className={homeStyle.skillTitle}>
                  <img src={git} alt="skill" />
                  <p>Github</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercentgithub}`}
                  >
                    75%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBargithub}`}
                >
                  <div></div>
                </div>
              </li>
              <li className={homeStyle.firebase}>
                <div className={homeStyle.skillTitle}>
                  <img src={firebase} alt="skill" />
                  <p>Firebase</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercentfirebase}`}
                  >
                    90%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBarfirebase}`}
                >
                  <div></div>
                </div>
              </li>
              <li className={homeStyle.postman}>
                <div className={homeStyle.skillTitle}>
                  <img src={postman} alt="skill" />
                  <p>Postman</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercentpostman}`}
                  >
                    90%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBarpostman}`}
                >
                  <div></div>
                </div>
              </li>
              <li className={homeStyle.vscode}>
                <div className={homeStyle.skillTitle}>
                  <img src={vscode} alt="skill" />
                  <p>VS Code</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercentvscode}`}
                  >
                    90%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBarvscode}`}
                >
                  <div></div>
                </div>
              </li>
               <li className={homeStyle.vscode}>
                <div className={homeStyle.skillTitle}>
                  <img src={sqlServer} alt="skill" />
                  <p>SQL Server</p>
                  <small
                    className={`${homeStyle.progressPercent} ${homeStyle.progressPercentvscode}`}
                  >
                    90%
                  </small>
                </div>
                <div
                  className={`${homeStyle.skillBar} ${homeStyle.skillBarvscode}`}
                >
                  <div></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="project" className={homeStyle.about}>
        <h2 className={homeStyle.heading}>Featured Projects</h2>
        <p className={homeStyle.skillQuote}>
          Some things I've built to solve real-world problems
        </p>
        <hr className={homeStyle.horizontalLine}></hr>
        <div className={homeStyle.projectContainer}>
          <div className={homeStyle.leftProjectContainer}>
            <img src={img1} alt="pro_img" />
          </div>
          <div className={homeStyle.rightProjectContainer}>
            <div className={homeStyle.desc}>
              <h2>Portfolio Website</h2>
              <hr />
              <p>
                A responsive and modern portfolio built with React.js and CSS,
                featuring smooth animations and elegant UI. Showcases my
                projects, skills, and experience with a clean and professional
                design.
              </p>
            </div>
            <div className={homeStyle.tech}>
              <div>
                <img src={html} alt="html" />
                HTML5
              </div>
              <div>
                <img src={css} alt="html" />
                CSS3
              </div>
              <div>
                <img src={react} alt="html" />
                React.js
              </div>
            </div>
            <div className={homeStyle.links}>
              <a
                href="https://github.com/ShabanIrshad/ShabanPortfolio/tree/main"
                target="blank"
              >
                <img src={git} alt="link" />
              </a>
              <a
                href="https://shaban-portfolio-ochre.vercel.app/"
                target="blank"
              >
                <img src={link} alt="link" />
              </a>
            </div>
          </div>
        </div>
        <div className={homeStyle.projectContainer}>
          <div className={homeStyle.leftProjectContainer}>
            <img src={img2} alt="pro_img" />
          </div>
          <div className={homeStyle.rightProjectContainer}>
            <div className={homeStyle.desc}>
              <h2>Pizza Restaurant UI</h2>
              <hr />
              <p>
                A responsive and modern portfolio built with React.js and CSS,
                featuring smooth animations and elegant UI. Showcases my
                projects, skills, and experience with a clean and professional
                design.
              </p>
            </div>
            <div className={homeStyle.tech}>
              <div>
                <img src={html} alt="html" />
                HTML5
              </div>
              <div>
                <img src={css} alt="html" />
                CSS3
              </div>
            </div>
            <div className={homeStyle.links}>
              <a
                href="https://github.com/ShabanIrshad/PizzaRestaurant/tree/main"
                target="blank"
              >
                <img src={git} alt="link" />
              </a>
              <a
                href="https://pizza-restaurant-xenf.onrender.com/"
                target="blank"
              >
                <img src={link} alt="link" />
              </a>
            </div>
          </div>
        </div>
        <div className={homeStyle.projectContainer}>
          <div className={homeStyle.leftProjectContainer}>
            <img src={img3} alt="pro_img" />
          </div>
          <div className={homeStyle.rightProjectContainer}>
            <div className={homeStyle.desc}>
              <h2>Coin Gecko API</h2>
              <hr />
              <p>
                A responsive and modern portfolio built with React.js and CSS,
                featuring smooth animations and elegant UI. Showcases my
                projects, skills, and experience with a clean and professional
                design.
              </p>
            </div>
            <div className={homeStyle.tech}>
              <div>
                <img src={html} alt="html" />
                HTML5
              </div>
              <div>
                <img src={css} alt="html" />
                CSS3
              </div>
              <div>
                <img src={react} alt="html" />
                React.js
              </div>
            </div>
            <div className={homeStyle.links}>
              <a
                href="https://github.com/ShabanIrshad/coin-gecko"
                target="blank"
              >
                <img src={git} alt="link" />
              </a>
              <a href="https://coin-gecko-inky.vercel.app/" target="blank">
                <img src={link} alt="link" />
              </a>
            </div>
          </div>
        </div>
        <div className={homeStyle.projectContainer}>
          <div className={homeStyle.leftProjectContainer}>
            <img src={img4} alt="pro_img" />
          </div>
          <div className={homeStyle.rightProjectContainer}>
            <div className={homeStyle.desc}>
              <h2>Pager| Message App</h2>
              <hr />
              <p>
                A responsive and modern portfolio built with React.js and CSS,
                featuring smooth animations and elegant UI. Showcases my
                projects, skills, and experience with a clean and professional
                design.
              </p>
            </div>
            <div className={homeStyle.tech}>
              <div>
                <img src={html} alt="html" />
                HTML5
              </div>
              <div>
                <img src={css} alt="html" />
                CSS3
              </div>
              <div>
                <img src={react} alt="html" />
                React.js
              </div>
              <div>
                <img src={firebase} alt="html" />
                Firebase
              </div>
            </div>
            <div className={homeStyle.links}>
              <a href="https://github.com/ShabanIrshad/pager" target="blank">
                <img src={git} alt="link" />
              </a>
              <a href="https://pager-snowy.vercel.app/" target="blank">
                <img src={link} alt="link" />
              </a>
            </div>
          </div>
        </div>
        <div className={homeStyle.moreDiv}>
          <Link to='/projects'>
          <button>
            See More Projects
          </button>
          </Link>
        </div>
      </section>
      <section id="about" className={homeStyle.about}>
        <h2 className={homeStyle.heading}>Achievements</h2>
        <p className={homeStyle.skillQuote}>
          Here are some of my key achievements.
        </p>
        <hr className={homeStyle.horizontalLine}></hr>
        <div className={homeStyle.carousel}>
          <div className={homeStyle.group1}>
            <div>
              <a href="https://certificate.codingninjas.com/view/7b5d36cb5ee547e9">
                <img src={webDev} alt="img" />
                <p>Web Development</p>
              </a>
            </div>
            <div>
              <a href="https://certificate.codingninjas.com/view/4adfdd37bcc2d552">
                <img src={genAi} alt="img" />
                <p>Generative AI</p>
              </a>
            </div>
            <div>
              <a href="https://drive.google.com/file/d/1o7jbr9I61J2AZDOEaZQdtaX2-jLmU8a3/view">
                <img src={reactjs} alt="img" />
                <p>ReactJs</p>
              </a>
            </div>
            <div>
              <a href="https://github.com/ShabanIrshad/JavaScript-Alogorithm-and-Data-Structure-Certificateion-freeCodeCamp-/blob/main/FreeCodeCampCertificate.jpg">
                <img src={dsfree} alt="img" />
                <p>Data Structures in JS</p>
              </a>
            </div>
            <div>
              <a href="https://www.diginique.com/wp-content/uploads/DT24070066.png">
                <img src={fullStack} alt="img" />
                <p>Full Stack Development</p>
              </a>
            </div>
            <div>
              <a href="https://certificate.codingninjas.com/view/7b5d36cb5ee547e9">
                <img src={dsjava} alt="img" />
                <p>Data Structures in Java</p>
              </a>
            </div>
            <div>
              <a href="https://www.hackerrank.com/certificates/iframe/995f8aa84822">
                <img src={javaBasic} alt="img" />
                <p>Java Basic</p>
              </a>
            </div>
            <div>
              <a href="https://drive.google.com/file/d/1aADrMNBKOhrWNhMt-eaiRDnv0gYzxeTa/view">
                <img src={sqlData} alt="img" />
                <p>SQl Data Analytics</p>
              </a>
            </div>
            <div>
              <a href="https://drive.google.com/file/d/1zF_R0itfh58y6uO0EWiQmPc_dCR509fZ/view">
                <img src={ninjaSlayground} alt="img" />
                <p>Ninja Slayground2.0</p>
              </a>
            </div>
          </div>
          <div aria-hidden className={homeStyle.group1}>
            <div>
              <a href="https://certificate.codingninjas.com/view/7b5d36cb5ee547e9">
                <img src={webDev} alt="img" />
                <p>Web Development</p>
              </a>
            </div>
            <div>
              <a href="https://certificate.codingninjas.com/view/4adfdd37bcc2d552">
                <img src={genAi} alt="img" />
                <p>Generative AI</p>
              </a>
            </div>
            <div>
              <a href="https://drive.google.com/file/d/1o7jbr9I61J2AZDOEaZQdtaX2-jLmU8a3/view">
                <img src={reactjs} alt="img" />
                <p>ReactJs</p>
              </a>
            </div>
            <div>
              <a href="https://github.com/ShabanIrshad/JavaScript-Alogorithm-and-Data-Structure-Certificateion-freeCodeCamp-/blob/main/FreeCodeCampCertificate.jpg">
                <img src={dsfree} alt="img" />
                <p>Data Structures in JS</p>
              </a>
            </div>
            <div>
              <a href="https://www.diginique.com/wp-content/uploads/DT24070066.png">
                <img src={fullStack} alt="img" />
                <p>Full Stack Development</p>
              </a>
            </div>
            <div>
              <a href="https://certificate.codingninjas.com/view/7b5d36cb5ee547e9">
                <img src={dsjava} alt="img" />
                <p>Data Structures in Java</p>
              </a>
            </div>
            <div>
              <a href="https://www.hackerrank.com/certificates/iframe/995f8aa84822">
                <img src={javaBasic} alt="img" />
                <p>Java Basic</p>
              </a>
            </div>
            <div>
              <a href="https://drive.google.com/file/d/1aADrMNBKOhrWNhMt-eaiRDnv0gYzxeTa/view">
                <img src={sqlData} alt="img" />
                <p>SQl Data Analytics</p>
              </a>
            </div>
            <div>
              <a href="https://drive.google.com/file/d/1zF_R0itfh58y6uO0EWiQmPc_dCR509fZ/view">
                <img src={ninjaSlayground} alt="img" />
                <p>Ninja Slayground2.0</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className={homeStyle.about}>
        <h2 className={homeStyle.heading}>Get in Touch</h2>
        <p className={homeStyle.skillQuote}>
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
        <hr className={homeStyle.horizontalLine}></hr>
        <div className={homeStyle.contactContainer}>
          <div className={homeStyle.leftContact}>
              <form>
                <label htmlFor="name">Name</label><br/>
                <input type="text" id="name" placeholder="Enter Name Here.." /><br/>
                 <label htmlFor="email">Email</label><br/>
                <input type="text" id="email" placeholder="Enter Email Here.." /><br/>
                 <label htmlFor="message">Message</label><br/>
                <textarea type="text" id="message" placeholder="Enter Your Message Here.."></textarea><br/>
                <button>Send Message</button>
              </form>
          </div>
          <div className={homeStyle.rightContact}>
              <h3>Contact Information</h3>
              <ul>
                <li><a href="mailto:shabanirshad408@gmail.com" ><img src={emailPic} alt="cont_email" /><span>shabanirshad408@gmail.com</span></a></li>
                <li><a href="https://github.com/ShabanIrshad" target="blank"><img src={git} alt="cont_email" /><span>Github Profile</span></a></li>
                <li><a href="https://www.linkedin.com/in/mohd-shaban-ab2417146/" target="blank"><img src={linked} alt="cont_email" /><span>LinkedIn Profile</span></a></li>
                <li><a href="https://www.instagram.com/_shaban_irshad/" target="blank"><img src={insta} alt="cont_email" /><span>Instagram Handle</span></a></li>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
