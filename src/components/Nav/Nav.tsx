import { useState } from 'react'
import Styled from 'styled-components'
import style from './Nav.module.css'


function Nav() {
  const [windowStatus, setWindowStatus] = useState('none')
  const [squareStatus, setSquareStatus] = useState('none')
  const StyledWindow = Styled.div`
    display: ${windowStatus};
    position: absolute;
    z-index: 40;
    left: 70%;
    top: 12.5%;
    width: 246px;
    height: 333px;
    border-radius: 20px;
    background: white;
    border: 1px #E2E2E2 solid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  const StyledSq = Styled.div`
    display: ${squareStatus};
    position: absolute;
    z-index: 50;
    left: 84.6%;
    top: 12%;
    width: 10px;
    height: 10px;
    rotate: 45deg;
    background: white;
    border-top: 1px #E2E2E2 solid;
    border-left: 1px #E2E2E2 solid;
  `
 
  const onClickProfile = () => {
    if (windowStatus == 'none') { setWindowStatus('flex'); setSquareStatus('block') }
    else { setWindowStatus('none'); setSquareStatus('none') }
  }

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
        
        {/* { sessionStorage.getItem('Name') !== null ?
        <div className={style.profile}>
          <img className={style.icon} src="https://playentry.org/img/IcoTopSearch.svg" alt="" />
          <img className={style.icon} src="https://playentry.org/img/IcoTopAlarm.svg" alt="" />
          <button onClick={onClickProfile} className={style.profile_btn}>
            <img className={style.profile_img} src="https://playentry.org/uploads/87/4w/874wed1gklsv5s5w003hf51f2bgj6ui2.svg" alt="" />
          </button>
        </div>
        : <button className={style.login}>로그인</button> } */}
        <div className={style.profile}>
          <img className={style.icon} src="https://playentry.org/img/IcoTopSearch.svg" alt="" />
          <img className={style.icon} src="https://playentry.org/img/IcoTopAlarm.svg" alt="" />
          <button onClick={onClickProfile} className={style.profile_btn}>
            <img className={style.profile_img} src="https://playentry.org/uploads/87/4w/874wed1gklsv5s5w003hf51f2bgj6ui2.svg" alt="" />
          </button>
        </div>

        <StyledSq className={style.square} />
        <StyledWindow className={style.window}>
          <img className={style.window_img} src="https://playentry.org/uploads/87/4w/874wed1gklsv5s5w003hf51f2bgj6ui2.svg" alt="" />
          <h3 className={style.window_name}>entry</h3>
          <div className={style.window_border} />
          <div className={style.window_menu_contain}>
            <div className={style.window_menu}>마이페이지</div>
            <div className={style.window_menu}>나의 학급</div>
            <div className={style.window_menu}>회원 정보 수정</div>
            <div className={style.window_menu}>로그아웃</div>
          </div>
        </StyledWindow>

      </nav>
    </div>
  )
}

export default Nav