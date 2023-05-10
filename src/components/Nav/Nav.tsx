import { Fragment } from 'react'
import style from './Nav.module.css'

function Nav() {
 
  return (
    <div className={style.contain}>
      <nav className={style.nav}>
        <img className={style.logo} src="https://playentry.org/img/CommonLogo.svg" alt="" />

        <div className={style.menu}>
          <div className={style.item}>생각하기</div>
          <div className={style.item}>만들기</div>
          <div className={style.item}>공유하기</div>
          <div className={style.item}>커뮤니티</div>
        </div>
        
        <div className={style.profile}>
          <img className={style.icon} src="https://playentry.org/img/IcoTopSearch.svg" alt="" />
          <img className={style.icon} src="https://playentry.org/img/IcoTopAlarm.svg" alt="" />
          <button className={style.profile_btn}>
            <img className={style.profile_img} src="https://playentry.org/uploads/87/4w/874wed1gklsv5s5w003hf51f2bgj6ui2.svg" alt="" />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Nav