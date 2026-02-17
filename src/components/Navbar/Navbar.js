import {Link,Outlet} from 'react-router-dom';
import navStyle from '../Navbar/Navbar.module.css';
import { useState } from 'react';
const Navbar=()=>{
    const [active,setActive]=useState('home');
    return (
        <>
            <div className={navStyle.nav}>
                <div className={navStyle.leftNavDiv}>
                    <h2>Shaban Irshad</h2>
                   
                </div>
                <div className={navStyle.rightNavDiv}>
                    <ul>
                        <li><Link to='/'className={active==='home'?navStyle.activeLink:''} onClick={()=>setActive('home')}>Home</Link></li>
                        <li><Link to='/about' className={active==='about'?navStyle.activeLink:''} onClick={()=>setActive('about')}>About</Link></li>
                        <li><Link to='/skills' className={active==='skills'?navStyle.activeLink:''} onClick={()=>setActive('skills')}>Skills</Link></li>
                        <li><Link to='/projects' className={active==='project'?navStyle.activeLink:''} onClick={()=>setActive('project')}>Project</Link></li>
                        <li><Link to='/contact' className={active==='contact'?navStyle.activeLink:''} onClick={()=>setActive('contact')}>Contact</Link></li>
                    </ul>
                </div>
                 <div className={navStyle.hamburger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            </div>
            <Outlet/>
        </>
    );
}

export default Navbar;