import projectStyle from './Projects.module.css';
import shaban from '../../Assets/Shaban.png'

const Projects=()=>{
    // const projects=[
    //     {
    //         id:1,
    //         name:'',
    //         desc:'',
    //         img:'',
    //         github:'',
    //         live:'',
    //         tech:'',
    //         createdAt:'',
    //     }
    // ];
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
                                <div className={projectStyle.image}>
                                    <img src={shaban}  alt='project_img' />
                                </div>
                                <div className={projectStyle.cardContent}>
                                    <h4 className={projectStyle.cardName}>Project Name</h4>
                                    <p className={projectStyle.cardDesc}> descProject descProject descProject descProject descProject descProject descProject desc</p>
                                    <div className={projectStyle.tech}>

                                    </div>
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