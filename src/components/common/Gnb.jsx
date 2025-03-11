import './Gnb.css';

const Gnb=()=>{
    return(
        <nav className="Gnb">
            <div className="gnb-inner">
                <div className="main-btn">
                    <img src="" alt="메인페이지 버튼" />
                </div>
                <div className="stop-watch">
                    <img src="" alt="스탑워치 버튼" />
                </div>
                <div className="addToDo">
                    <img src="" alt="목표추가 버튼" />
                </div>
                <div className="setting-btn">
                    <img src="" alt="세팅버튼" />
                </div>
            </div>
        </nav>
    )
};
export default Gnb;

/* 
    메뉴바
        구성 버튼
            홈버튼: 메인페이지로
            스탑워치 버튼: 스탑워치 오버레이
            목표리스트 버튼: 목표 관리 페이지로
            사용자 프로필: 설정메뉴 오버레이
*/