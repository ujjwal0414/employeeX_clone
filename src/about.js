import cls from "./CSSfiles/about.module.css"
import { IoMdPersonAdd } from "react-icons/io";
import { useState } from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { MdTravelExplore,MdFactCheck } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

let About=()=>{
    let [showDesc,setDescNos]=useState(-1);
    let [descbox,setBox]=useState(false);
    let [selectedBox,setSelection]=useState(null);
    //defining the array
    let showDescription=(keynos)=>{
       
        setBox(!descbox)
        setSelection(keynos);
     }
    let workingsteps=[
        {
            step:1,
            name:"Register",
            descripbe:"Sign up with your proffesional id on employeex with phone number",
            logodiv:<IoMdPersonAdd className={descbox && selectedBox===0?cls.hidestepBox:cls.Logo}/>
        },
        {
            step:2,
            name:"Profile",
            descripbe:"Set up your profile",
            logodiv:<AiOutlineProfile className={descbox && selectedBox===1?cls.hidestepBox:cls.Logo}/>
        },
        {
            step:3,
            name:"Explore",
            descripbe:"Ready to explore your self",
            logodiv:<MdTravelExplore className={descbox && selectedBox===2?cls.hidestepBox:cls.Logo}/>
        },
        {
            step:4,
            name:"Apply",
            descripbe:"Apply for the job",
            logodiv:<MdFactCheck className={descbox && selectedBox===3?cls.hidestepBox:cls.Logo}/>
           
        }
    ]
    //ending the array
    
    return(
        <div className={cls.container}>
           <div className={cls.HowItWorks}>
              <h2>How it Works!</h2>
              <div className={cls.Desc}>
                {
                    workingsteps.map((item,pos)=>{
                        return(
                            <p key={pos}>{pos===showDesc?item.descripbe:""}</p>
                        )
                    })
                }
              </div>
           </div>
           <div className={cls.steps}>
            {
             workingsteps.map((item,pos)=>{
                  return(
                    <>
                    <div key={pos} onClick={()=>{showDescription(pos)}} onMouseEnter={()=>{setDescNos(pos)}} onMouseLeave={()=>{setDescNos(-1)}} className={cls.stepBox}>
                  <p className={descbox && selectedBox===pos?cls.hidestepBox:cls.Title}>Step {item.step}</p>
                  <p>{item.logodiv}</p>
                  <p className={descbox && selectedBox===pos?cls.hidestepBox:cls.Title}>{item.name}</p>
                  <p className={descbox && selectedBox===pos?cls.HoveredDesc:cls.noshowdesc}>{item.descripbe}</p>
                </div>
                    {pos<3?<div><FaArrowDown className={cls.downarrow}/></div>:<></>}
                    </>
                  )

             })
            
            
            
            }
                

                
               
           </div>
        </div>
    )
}
export {About}