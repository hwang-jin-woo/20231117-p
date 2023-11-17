import styled from "styled-components"
import "./css/faq.css";
import { Link, useNavigate} from "react-router-dom"
import {  AiOutlineMenu  } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
const Container=styled.div`
  width: calc(100vw-10px);
  background-color: khaki;
`
const Section=styled`
  width: 100%;

`
export function FAQ(){
  const navigate = useNavigate();
  const mbClick = () => {
    navigate('/Mb');
  };
  const pageClick = () => {
    navigate('/Mypage');
  };
  const AdminClick = () => {
    navigate('/Admin');
  };
  return<>
    <Container>    
        <main className="main">
        <div className="sidebar">
            <div className="menu-icon">
              <AiOutlineMenu />
            </div>
                  <div className="barbrand">        
                      <div className="sidebabrand-icon">HP</div>
                      <h2>병원 예약시스템</h2>
                    </div>
                    <div className="Sidebaicon1">
                      <button className="sidebarlogin"onClick={AdminClick}>
                        <div className="user-icon">
                          <AiOutlineUser />
                        </div>
                      <h3>로그인</h3>
                      </button>
                      <button className="sidebarmb"onClick={mbClick}>
                        <div className="login-icon"> 
                          <FiLogIn/>
                        </div>
                <h3>회원가입</h3>
                      </button>
                    </div>
                    <ul id="Sidebamenu">
                      <li className="Sidebamenu-item">
                        <div className="Sidebamenu-button">
                          <div className="down-icon">
                          진료예약<FiChevronDown />
                          </div>
                        </div>
                        <ul className="Sidebamenu-sub">
                          <li className="Sidebamenu-sub-item">
                            <Link to="#"className="sidemenu">예약하기</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#"className="sidemenu">예약확인</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#"className="sidemenu">예약자 현황</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#"className="sidemenu">병원정보</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="Sidebamenu-item">
                        <div className="Sidebamenu-button">
                        <div className="down-icon">
                          나의관리<FiChevronDown />
                          </div>
                        </div>
                        <ul className="Sidebamenu-sub">
                          <li className="Sidebamenu-sub-item">
                            <Link to="https://www.hira.or.kr/dummy.do?pgmid=HIRAA030009200000"target="_blank"className="sidemenu">병원내역 조회</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="https://www.kahp.or.kr/ho/medi/intro.do"target="_blank"className="sidemenu">건강검진</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#"className="sidemenu">BMI측정</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="Sidebamenu-item">
                        <div className="Sidebamenu-button">                        
                          <div className="down-icon">
                              검색<FiChevronDown />
                            </div>
                        </div>
                        <ul className="Sidebamenu-sub">
                          <li className="Sidebamenu-sub-item">
                            <Link to="#"className="sidemenu">내가 가본 병원</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#"className="sidemenu">가까운 병원</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#"className="sidemenu">인기병원</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="Sidebamenu-item">
                        <div className="Sidebamenu-button">
                          FAQ
                        </div>
                      </li>
                    </ul>
              </div>
              <Section >
                  <div className="login-wrap">
                      <div className="login-id-wrap">
                        <input placeholder="아이디" type="text" className="input-id"></input>
                      </div>
                      <div className="login-pw-wrap">
                        <input placeholder="비밀번호" type="password" className="input-pw"></input>
                      </div>
                      <div className="login-btn-wrap">
                        <button className="login-btn"onClick={AdminClick}>로그인</button>
                      </div>
                      <div className="under-login">
                        <span className="stay-check">
                          <input type="checkbox" name="stay-btn" value="stay" className="stay-checkbox" />로그인 상태 유지
                        </span>
                      </div>
                      <div className="login-btn1">         
                        <button onClick={mbClick}>회원가입</button>       
                        <button onClick={pageClick}>내정보수정</button>        
                      </div>
                  </div> 
                    <table >
        <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        </tbody>
    </table>
              </Section>
          </main>
    </Container>  
  </>
}
