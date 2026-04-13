import projectStyle from './Projects.module.css';
import shaban from '../../Assets/Shaban.png'

const Projects=()=>{
    return(
        <>
            <section className={projectStyle.section}>
                <div className={projectStyle.content}>
                    <h1>My Projects</h1>
                    <hr className={projectStyle.horizon}/>
                    <p>A collection of projects that showcase my skills and experience in building digital products.</p>
                    <div className={projectStyle.projectContainer}>
                        <a href='www.google.com' target='blank'>
                            <div className={projectStyle.card}>
                                <div>
                                    <img src={shaban}  alt='project_img' />
                                </div>
                          </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Projects;