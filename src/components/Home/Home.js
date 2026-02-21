import homeStyle from './Home.module.css';
import hero from '../../../src/Assets/hero.svg';
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
                        <p><b className={homeStyle.quote}>Full Stack developer</b>. A developer with an interest in Computer Science and web-development tech stacks.</p>
                        <p>I build applicatins that are fast, responsive and user friendly.</p>
                        <p>I enjoy turning ideas into real-world full-stack web applications.</p>
                        <div>
                            <button>Hire me!</button>
                            <button>Resume</button>
                        </div>
                    </div>
                </main>
                 <aside>
                    <span className={homeStyle.text}>shabanirshad408@gmal.com</span>
                 </aside>
               
            </section>
            
        </>
    );
}
export default Home;