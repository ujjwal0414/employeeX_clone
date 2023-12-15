import cls from "./CSSfiles/NavBar.module.css"
import { Links } from "./Links"
import { FaBars,FaFacebookF,FaYoutube, FaInstagram , FaLinkedin} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const NavBar=()=>{
    let [sidebarshow,setStatus]=useState(true);
    let [blurPage,setBlur]=useState(false);
    let sideClass=[cls.Links];
    let newClass=[];
     newClass=sidebarshow?sideClass.push(cls.showSideBar):sideClass;
     console.log(newClass);
    return(
        <div className={cls.MainContainer}>
             {blurPage?<div onClick={()=>{setStatus(!sidebarshow);setBlur(!blurPage)}} className={cls.BlurPage}></div>:<></>}
            <div  className={cls.NavBox}>
                <div className={cls.ShowBar}><FaBars onClick={()=>{setStatus(!sidebarshow);setBlur(!blurPage)}}/></div>
             <div className={cls.CompanyName}>Employee<span>X</span></div>
             <div className={sideClass.join(" ")}>
             <div className={cls.ComNameSideBar}>Employee<span>X</span><span className={cls.closeBar}><RxCross2 onClick={()=>{setStatus(!sidebarshow);setBlur(!blurPage)}}/></span></div>
               {
                Links.map((item,pos)=>{
                    return(
                       <div key={pos}><a href="/" >{item}</a></div>
                    )
                })
               }
               <div className={cls.social}>
                <p>Join the EmployeeX community now</p>
                <p className={cls.socialIcons}>
                    <div><FaFacebookF className={cls.socialLogo}/></div>
                    <div><FaYoutube className={cls.socialLogo}/></div>
                    <div><FaInstagram className={cls.socialLogo}/></div>
                    <div><FaLinkedin className={cls.socialLogo}/></div>

                </p>
               </div>
             </div>
             <div className={cls.SignUp}><span className={cls.signUpSpan}>Sign Up</span></div>
            </div>
        </div>
    )
}
export {NavBar}