import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import style from './App.module.css'
import Nav from '../../components/Nav/Nav'

import Entry from '../../assets/entry.png'

function App() {
 
  return (
    <Fragment>
      <Nav />
      <div className={style.bg}></div>
      <div className={style.app}>
        <div className={style.header}>
          <h2 className={style.title}>엔트리 이야기</h2>
          <div className={style.search_contain}>
            <FontAwesomeIcon icon={faSearch} className={style.search_icon} />
            <input type="text" className={style.search} />
          </div>
        </div>

        <div className={style.img_contain}>
          <img className={style.entry} src={Entry} alt="" />
        </div>

        <div className={style.enter}>
          <div className={style.enter_contain}>
            <img className={style.enter_logo} src='https://playentry.org/uploads/87/4w/874wed1gklsv5s5w003hf51f2bgj6ui2.svg' alt="" />
            <textarea rows={1} placeholder='무슨 생각을 하고 있나요?' className={style.enter_content} />
          </div>
          <div className={style.enter_menu}>
            <img src="https://playentry.org/img/IcoCmtSticker.svg" alt="" />
            <button className={style.submit}>등록</button>
          </div>
          <div className={style.warn}>
            <img className={style.warn_icon} src="https://playentry.org/img/IcoCaution2.svg" alt="" />
            <button className={style.warn_btn}>유의사항</button>
          </div>

          <div className={style.set_contain}>
            <div className={style.set}>최신순</div>
            <img className={style.arrow} src="https://playentry.org/img/IcoSelectArrow.svg" alt="" />
            <div className={style.set}>전체기간</div>
            <img className={style.arrow} src="https://playentry.org/img/IcoSelectArrow.svg" alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App