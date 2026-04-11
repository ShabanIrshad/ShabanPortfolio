import footerStyle from'./Footer.module.css';
import git from '../../Assets/gi.png';
import insta from "../../Assets/instagram.png";
import linked from "../../Assets/linked.png";

const Footer=()=>{
    return(
        <>
            <div className={footerStyle.container}>
                <div className={footerStyle.social}>
                    <span><a href="https://github.com/ShabanIrshad" target='blank'><img src={git} alt='social_icon' /></a></span>
                    <span><a href="https://www.linkedin.com/in/mohd-shaban-ab2417146/" target='blank'><img src={linked} alt='social_icon' /></a></span>
                    <span><a href="https://www.instagram.com/_shaban_irshad/" target='blank'><img src={insta} alt='social_icon' /></a></span>
                </div>
                <hr/>
                <div>
                    <p>Design and build with 🩷 by Mohd Shaban.</p>
                    
                </div>
                <div>
                    <small>&copy; All Rights Reserved 2026.</small>
                </div>
            </div>
        </>
    );
}
export default Footer;