import homeStyle from './Home.module.css';
import hero from '../../../src/Assets/hero.svg';
import shaban from '../../../src/Assets/Shaban.png';
const Home=()=>{
    return (
        <>  
            <section className={homeStyle.section}>
                <main>
                   
                    <div className={homeStyle.heroRight}> 
                        <img src={hero} alt='hero-image'/>
                    </div>
                     <div className={homeStyle.heroLeft}> 
                        <h2 className={homeStyle.quote}>hey there!, i'm-</h2>
                        <h1 className={homeStyle.name}>Mohd Shaban </h1>
                        <p><b className={homeStyle.quote}>Full Stack developer</b>. A developer with an interest in Computer Science and <u>web-development</u> tech stacks.</p>
                        <p>I build applicatins that are fast, responsive and user friendly.</p>
                        <p>I enjoy turning ideas into real-world full-stack web applications.</p>
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
            <section id='about'>
                <h2 className={homeStyle.heading}>A Bit About Me</h2>
                <hr className={homeStyle.horizontalLine}></hr>
                <div className={homeStyle.container}>
                    <div className={homeStyle.leftContainer}>
                        <div>
                            <p>Hey! I'm Mohd Shaban, I've been close to a computer since an early age, and been passionate about it ever since.</p>

                            <p>I really liked to build stuff using web-development tools, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies, focusing on Web Development projects.</p>

                            <p>I'm interested in building something awesome with code and automate tasks with code.</p>

                            <p> When I'm not coding I play games with my friends, watch some show on Netflix, or if the weather's good, play basketball!🏀 </p>
                       </div>
                    </div>
                    <div className={homeStyle.rightContainer}>
                       
                        <div>
                            <img src={shaban} alt='my-image'/>
                        </div>
                         <div className={homeStyle.design}>
                       <div></div><div></div><div></div><div></div><div></div><div></div><div></div> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> <div> <div> <div></div><div> <div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><div></div><div></div><div></div><div></div><div></div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </div>
                    </div>
                </div>

            </section>
            
        </>
    );
}
export default Home;