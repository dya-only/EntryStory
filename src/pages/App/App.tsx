import { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import style from './App.module.css'
import Nav from '../../components/Nav/Nav'
import Entry from '../../assets/entry.png'
const log = console.log

function App() {
  interface ContentsInf {
    uid: number;
    content: string;
  }
  const [contents, setContents] = useState([] as any)
  const [content, setContent] = useState('' as any)
  const [enter, setEnter] = useState('')
  const [warn, setWarn] = useState(false)
  
  useEffect(() => {
    const getContents = async () => {
      const resp = (await axios.get('/api/content')).data
      if (resp.length > 10) {
        for (let i = (resp.length - 10); i < resp.length; i++) {
          setContent(resp[i])
          contents.push(resp[i])
        }
      } else {
        for (let i = 0; i < resp.length; i++) {
          setContent(resp[i])
          contents.push(resp[i])
        }
      }
      setContents(contents.reverse())
    }
    getContents()
  }, [])

  const onSubmit = async () => {
    if (enter !== '') {
      await axios.post('/api/content', { content: enter })
      window.location.href='/'
    }
  }

  const getEnter = (e: any) => {
    setEnter(e.target.value)
  }

  return (
    <Fragment>
      { warn ?
        <div className={style.warning}>
          <div className={style.warn_panel}>
            <div className={style.warn_tmp}></div>
            <div className={style.warn_title}>유의사항</div>
            <button onClick={() => setWarn(false)} className={style.warn_ok}>확인</button>
          </div>
          <div className={style.warn_window}>
            <div className={style.warn_text}>게시물을 작성하기 전에 확인해 주세요.</div>

            <div className={style.warn_img_contain}>
              <div className={style.warn_img}>
                <img className={style.warn_img_img} src="https://playentry.org/img/ImgWriteGuideList1.svg" alt="" />
                <div className={style.warn_ab}>폭력, 음란물은 No!</div>
              </div>
              <div className={style.warn_img}>
                <img className={style.warn_img_img} src="https://playentry.org/img/ImgWriteGuideList2.svg" alt="" />
                <div className={style.warn_ab}>저작권을 지켜주세요.</div>
              </div>
              <div className={style.warn_img}>
                <img className={style.warn_img_img} src="https://playentry.org/img/ImgWriteGuideList3.svg" alt="" />
                <div className={style.warn_ab}>개인 정보를 소중히</div>
              </div>
            </div>

            <div className={style.warn_info}>
              <div className={style.warn_info_content}>
                엔트리 회원 여러분!<br/>
                여러분은 엔트리뿐 아니라 아름다운 인터넷 세상을 만드는 주인공이자 디지털 시민입니다.<br/>
                <br/>
                우리 모두가 인터넷 윤리를 지키며 엔트리를 즐겁게 이용할 수 있도록 다음의 원칙을 지켜주세요.<br/>
                <br/>
                ● 다른 사용자를 비방하거나 인터넷 윤리에 어긋나는 게시물을 작성하지 않아요.<br/>
                ● 저작권과 초상권 뿐만 아니라 다른 사용자의 개인정보도 소중하게 여기고 보호해요.<br/>
                ● 다양한 문화, 국가, 인종, 성별 등의 사용자를 배려해요.<br/>
              </div>
            </div>
          </div>
        </div>
      : null }

      <Nav />
      <div className={style.bg}></div>
      <div className={style.app}>
        <div className={style.header}>
          <h2 className={style.title}>엔트리 이야기</h2>
          <div className={style.search_contain}>
            <FontAwesomeIcon icon={faSearch} className={style.search_icon} />
            <input type="text" className={style.search} />
          </div>
          <FontAwesomeIcon icon={faSearch} className={style.m_search} />
        </div>

        <div className={style.img_contain}>
          <img className={style.entry} src={Entry} alt="" />
        </div>

        <div className={style.enter}>
          <div className={style.enter_contain}>
            <img className={style.enter_logo} src='https://playentry.org/uploads/87/4w/874wed1gklsv5s5w003hf51f2bgj6ui2.svg' alt="" />
            <textarea onChange={getEnter} value={enter} rows={1} placeholder='무슨 생각을 하고 있나요?' className={style.enter_content} />
          </div>
          <div className={style.enter_menu}>
            <img src="https://playentry.org/img/IcoCmtSticker.svg" alt="" />
            <button onClick={onSubmit} className={style.submit}>등록</button>
          </div>
          <div className={style.warn}>
            <img className={style.warn_icon} src="https://playentry.org/img/IcoCaution2.svg" alt="" />
            <button onClick={() => setWarn(true)} className={style.warn_btn}>유의사항</button>
          </div>

          <div className={style.set_contain}>
            <div className={style.set}>최신순</div>
            <img className={style.arrow} src="https://playentry.org/img/IcoSelectArrow.svg" alt="" />
            <div className={style.set}>전체기간</div>
            <img className={style.arrow} src="https://playentry.org/img/IcoSelectArrow.svg" alt="" />
          </div>

          { contents.map((e: ContentsInf, idx: number) => (
            <div key={idx} className={style.card}>
              <img className={style.card_img} src="https://playentry.org/uploads/87/4w/874wed1gklsv5s5w003hf51f2bgj6ui2.svg" alt="" />
              <div className={style.content}>
                <div className={style.card_name}>entry</div>
                <div className={style.card_date}>2023.</div>
                <div className={style.card_content}>{ e.content }</div>
              </div>
            </div>
          ))}

          <footer className={style.footer}></footer>

        </div>
      </div>
    </Fragment>
  )
}

export default App