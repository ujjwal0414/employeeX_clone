import cls from "./CSSfiles/Home.module.css"
import { Card } from "./cards"
const Home=()=>{
    return(
        <>
        
        <div className={cls.MainContainer}>
           
          <div className={cls.SearchBox}>
           <div className={cls.Description}>
            <h1>Get Your <span>Dream Job</span> Here!</h1>
            <h2 className={cls.findFdream}>Find the job that is perfect for you on EmployeeX</h2>
           </div>
           <div className={cls.SearchJobFilter}>
               <div className={cls.SearchJob}>
                <input className={cls.searchfieldJob} type="text" placeholder="Search Jobs"/>
               </div>
               <div className={cls.LocationAndSearch}>
                   <input className={cls.locationField} type="text" placeholder="Location"/>
                   <button className={cls.search}>Search</button>
               </div>
           </div>
           <div className={cls.Cards}>
            <h2 className={cls.explore}>Explore by <span className={cls.category}>Category</span></h2>
            <Card/>
           </div>
          </div>
        </div></>
    )
}
export {Home}