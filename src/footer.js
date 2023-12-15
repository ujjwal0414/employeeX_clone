import cls from "./CSSfiles/footer.module.css"
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import {FaFacebookF,FaYoutube, FaInstagram , FaLinkedin} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer=()=>{
    return(
        <div className={cls.FooterContainer}>
            <div className={cls.ContactContainer}>
            <div className={cls.CompanyAndHelp}>
                  <div className={cls.compname}>Employee<span className={cls.X}>X</span></div>
                  <div className={cls.free}>Please feel free to get in touch with us</div>
               </div>
               <div className={cls.Contact}>
                   <div className={cls.contactcard}>
                    <div><FaPhone className={cls.logo}/></div>
                    <div className={cls.Call}>Call us on
+91 6265868439<br></br> +91 9601158536 +91 9601158536</div>
                    <div></div>
                   </div>
                   <div className={cls.contactcard}>
                    <div><IoLocationOutline className={cls.logo}/></div>
                    <div className={cls.Call}>Our Location<br></br>IIT Delhi, Hauz Khas, New Delhi (110016)</div>
                    <div></div>
                   </div>
               </div>
               <div className={cls.email}>
                <div className={cls.emailcard}>
                <div><MdOutlineEmail className={cls.logo}/></div>
                    <div className={cls.Call}>How Can We Help<br></br>employeex.official@gmail.com</div>
                </div>
               </div>
            </div>
            <hr/>
            <div className={cls.privacyAndSocial}>
                   <div>
                    Terms of Service     Privacy Policy
                   </div>
                   <div>© 2023 Employee-X. All rights reserved.</div>
                   <div className={cls.socialIcons}>
                   <FaFacebookF className={cls.socIcon}/>
               <FaYoutube className={cls.socIcon}/>
               <FaInstagram className={cls.socIcon}/>
               <FaLinkedin className={cls.socIcon}/>
                   </div>
            </div>
          
        </div>
    )
}
export {Footer}