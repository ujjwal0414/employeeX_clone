import cls from "./CSSfiles/card.module.css"
import { FaCodepen } from "react-icons/fa";
let Card=()=>{
    return(
        <div className={cls.CardContainer}>
            <div className={cls.cardBox}>
              <div className={cls.Icon}><FaCodepen className={cls.Icon}/></div>
              <div className={cls.Desc}>
                <p className={cls.title}>Graphics & Design</p>
                <p className={cls.positionNos}>5 open positions</p>
              </div>
            </div>
            <div className={cls.cardBox}>
              <div className={cls.Icon}><FaCodepen className={cls.Icon}/></div>
              <div className={cls.Desc}>
                <p className={cls.title}>Graphics & Design</p>
                <p className={cls.positionNos}>5 open positions</p>
              </div>
            </div>
            <div className={cls.cardBox}>
              <div className={cls.Icon}><FaCodepen className={cls.Icon}/></div>
              <div className={cls.Desc}>
                <p className={cls.title}>Graphics & Design</p>
                <p className={cls.positionNos}>5 open positions</p>
              </div>
            </div>
            <div className={cls.cardBox}>
              <div className={cls.Icon}><FaCodepen className={cls.Icon}/></div>
              <div className={cls.Desc}>
                <p className={cls.title}>Graphics & Design</p>
                <p className={cls.positionNos}>5 open positions</p>
              </div>
            </div>
            <div className={cls.cardBox}>
              <div className={cls.Icon}><FaCodepen className={cls.Icon}/></div>
              <div className={cls.Desc}>
                <p className={cls.title}>Graphics & Design</p>
                <p className={cls.positionNos}>5 open positions</p>
              </div>
            </div>
        </div>
    )
}
export {Card}