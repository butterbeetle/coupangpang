import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";
import styles from "./CategoryPromotion.module.css";
import icons from "./ItemsIcon.module.css";

const items = {
  "woman-clothes": [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/00.png`),
      caption: {
        title: "해외 명품 브랜드 SALE",
        description: "코치 / 토리 버치 외 최대 80%",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/01.png`),
      caption: {
        title: "자주 봄 신상 미리보기",
        description: "파자마 / 라운지웨어 / 간절기 아우터",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/02.png`),
      caption: {
        title: "봄내음을 담은 빈폴 ACC",
        description: "가방 / 모자 / 지갑 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/03.jpg`),
      caption: {
        title: "가벼워진 스타일링 ~80%",
        description: "의류에서 슈즈, ACC까지",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/04.jpg`),
      caption: {
        title: "봄에 입기 좋은 패션 세일",
        description: "스포츠웨어 / 여성의류 / 신발 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/05.png`),
      caption: {
        title: "밸런타인데이 스타일링",
        description: "원피스 / 스커트 / 스웨터 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/06.png`),
      caption: {
        title: "주말 데이트룩 할인%",
        description: "블라우스/원피스 외 최대 80% 할인",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/woman-clothes/07.png`),
      caption: {
        title: "데일리룩의 완성, 주얼리",
        description: "목걸이 / 팔찌 / 귀걸이 외",
      },
    },
  ],
  "man-clothes": [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/man-clothes/00.jpg`),
      caption: {
        title: "가벼워진 스타일링 ~80%",
        description: "의류에서 슈즈, ACC까지",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/man-clothes/01.png`),
      caption: {
        title: "기본 패션 아이템 ~30%",
        description: "맨투맨 / 슬랙스 / 청바지 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/man-clothes/02.jpg`),
      caption: {
        title: "데일리 스니커즈 컬렉션",
        description: "운동화 / 러닝화 / 슬립온 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/man-clothes/03.png`),
      caption: {
        title: "타미힐피거 캐주얼룩 ~52%",
        description: "카디건 / 원피스 / 셔츠",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/man-clothes/04.jpg`),
      caption: {
        title: "편하게 입는 캐주얼웨어",
        description: "맨투맨 / 후드집업 / 티셔츠 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/man-clothes/05.png`),
      caption: {
        title: "평일 출근룩으로 주말 골프",
        description: "골프 셔츠 / 니트 조끼 / 바지 외",
      },
    },
  ],
  food: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/food/00.jpg`),
      caption: {
        title: "마음을 전하는",
        description: "선물세트",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/food/01.jpg`),
      caption: {
        title: "실패없는 만두 선택",
        description: "오뚜기 X.O.만두 모델 김태희",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/food/02.jpg`),
      caption: {
        title: "속 끝까지 뜨끈하게 데워주는",
        description: "어묵탕",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/food/03.jpg`),
      caption: {
        title: "끝겨울 식품 릴레이 SALE",
        description: "국물요리/겨울간식/커피&차",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/food/04.jpg`),
      caption: {
        title: "간편하게 우러나오는 커피향",
        description: "드립커피백",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/food/05.jpg`),
      caption: {
        title: "깊게 우려낸",
        description: "갈비탕",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/food/06.jpg`),
      caption: {
        title: "켈로그 에너지바K!",
        description: "맛과 영양을 다잡아 제대로 충전!",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/food/07.jpg`),
      caption: {
        title: "저탄고지 키토제닉",
        description: "MCT 오일, 기버터, 아보카토 외",
      },
    },
  ],
  interior: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/interior/00.jpg`),
      caption: {
        title: "2월 새단장",
        description: "가구 SALE",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/interior/01.jpg`),
      caption: {
        title: "홈인테리어&주방용품",
        description: "위클리 특가",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/interior/02.jpg`),
      caption: {
        title: "초특가, 부케가르니 X 나드",
        description: "최대 70%, 최대 1만원 추가 할인",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/interior/03.jpg`),
      caption: {
        title: "이달의 수납/정리 SALE",
        description: "깔끔한 내 공간을 위해",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/interior/04.jpg`),
      caption: {
        title: "찬바람 걱정 No!",
        description: "따뜻한 방한용품",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/interior/05.jpg`),
      caption: {
        title: "더 큰 깔끔한 수납 정리",
        description: "이거하나면 깔끔하게!",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/interior/06.jpg`),
      caption: {
        title: "졸업 선물 SALE",
        description: "마음을 전해요",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/interior/07.jpg`),
      caption: {
        title: "23년에도 강력한 파워",
        description: "듀라셀 브랜드 모음전",
      },
    },
  ],
  digital: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/digital/00.jpg`),
      caption: {
        title: "쿠첸 가전 초특가",
        description: "최대 20% 할인",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/digital/01.jpg`),
      caption: {
        title: "쿠팡 X HP",
        description: "디자인과 성능을 동시에",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/digital/02.jpg`),
      caption: {
        title: "이오시카",
        description: "IPL 가정용 레이저 제모기",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/digital/03.jpg`),
      caption: {
        title: "라피타",
        description: "IPL 오토샷 레이저 제모기",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/digital/04.jpg`),
      caption: {
        title: "갓!성비 노트북 SALE",
        description: "#에이수스 #델 #레노버 #MS 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/digital/05.jpg`),
      caption: {
        title: "슈퍼세일위크! 창고대방출",
        description: "가전&디지털 최대 69% 득템찬스",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/digital/06.jpg`),
      caption: {
        title: "언제나 사랑스럽게 보다나",
        description: "가방에 쏙 미니미니해",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/digital/07.jpg`),
      caption: {
        title: "인기급상승 난방가전 SALE",
        description: "#전기요 #히터 #가습기 #온수매트 외",
      },
    },
  ],
  office: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/office/00.jpg`),
      caption: {
        title: "더오픈하우스",
        description: "더오픈하우스 문구류",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/office/01.jpg`),
      caption: {
        title: "모닝글로리",
        description: "필기류, 화일 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/office/02.jpg`),
      caption: {
        title: "제브라 브랜드 기획전",
        description: "델가드, 사라사 등",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/office/03.png`),
      caption: {
        title: "발렌타인데이 파티&포장용품",
        description: "로맨틱하고 완벽한 하루를 만드세요!",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/office/04.jpg`),
      caption: {
        title: "인디고 브랜드 기획전",
        description: "달력, 다이어리, 가계부, 플래너",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/office/05.png`),
      caption: {
        title: "케이엠엘리 인기 DIY",
        description: "케이엠엘리 보석십자수",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/office/06.jpg`),
      caption: {
        title: "Ibis 브랜드 기획전",
        description: "노트, 학용품, 문구세트",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/office/07.jpg`),
      caption: {
        title: "삼성물산 프리미엄 Copy",
        description: "부드럽고 품질 좋은 복사용지",
      },
    },
  ],
  living: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/living/00.jpg`),
      caption: {
        title: "다우니 센서티브 특가",
        description: "민감성 피부를 위한 섬유유연제",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/living/01.jpeg`),
      caption: {
        title: "세븐랩 프리미엄 캡슐세제",
        description: "계량 없이 한 번에, 더 강한 세척력",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/living/02.jpg`),
      caption: {
        title: "건강 관리를 위한 필수품",
        description: "헬스케어 전문관",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/living/03.jpg`),
      caption: {
        title: "#리스테린 오늘 초특가!",
        description: "굿모닝 리스테린~",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/living/04.jpg`),
      caption: {
        title: "브라운 면도기 선물 추천",
        description: "발렌타인데이 특별 기획전",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/living/05.jpg`),
      caption: {
        title: "예쁜 마스크는 참존",
        description: "득템 찬스",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/living/06.jpg`),
      caption: {
        title: "30초 헤어미라클 팬틴!",
        description: "집에서도 쉽고 빠르게 머릿결 관리하자",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/living/07.jpg`),
      caption: {
        title: "초특가, 부케가르니 X 나드",
        description: "최대 70%, 최대 1만원 추가 할인",
      },
    },
  ],
  beauty: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/beauty/00.jpg`),
      caption: {
        title: "탄력 끌어올려! 콜라겐크림",
        description: "#저분자 #콜라겐캡슐",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/beauty/01.jpg`),
      caption: {
        title: "더마코스메틱",
        description: "예민한 피부를 위한 맞춤 해결",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/beauty/02.jpg`),
      caption: {
        title: "COSRX 2월 브랜드위크",
        description: "달달한 할인 프로모션",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/beauty/03.jpg`),
      caption: {
        title: "헤라 블랙쿠션 리필 2입",
        description: "밀착 매트 커버 추천",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/beauty/04.jpg`),
      caption: {
        title: "크림의 신세계, 지아자",
        description: "깊이가 다른 산양유 더마케어",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/beauty/05.jpg`),
      caption: {
        title: "단 7일, 브랜드위크",
        description: "즉시할인+추가 할인쿠폰",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/beauty/06.png`),
      caption: {
        title: "로드샵",
        description: "2월 더블 혜택!",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/beauty/07.jpg`),
      caption: {
        title: "시크무드 케이트",
        description: "베이스부터 브로우까지",
      },
    },
  ],
  sports: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/sports/00.jpg`),
      caption: {
        title: "편안한 착용감",
        description: "스포츠보호대",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/sports/01.jpg`),
      caption: {
        title: "방한용품 마지막 세일!",
        description: "귀마개, 넥워머, 스키복 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/sports/02.jpg`),
      caption: {
        title: "겨울 스포츠 OPEN",
        description: "스키/방한용품",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/sports/03.jpg`),
      caption: {
        title: "편안한 활동감",
        description: "스포츠양말",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/sports/04.jpg`),
      caption: {
        title: "겨울시즌 실내용",
        description: "골프연습용품",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/sports/05.jpg`),
      caption: {
        title: "새해 다이어트할 결심",
        description: "요가/필라테스웨어",
      },
    },
  ],
  health: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/health/00.jpg`),
      caption: {
        title: "건강의 시작 광동!",
        description: "면역 UP! 건강 UP!",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/health/01.jpg`),
      caption: {
        title: "건강함 가득한 2월",
        description: "에치와이와 함께",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/health/02.jpg`),
      caption: {
        title: "비타민마을",
        description: "가성비 좋은 유산균",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/health/03.jpg`),
      caption: {
        title: "생기와 활력을 선물해요",
        description: "비타민 선물세트",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/health/04.jpg`),
      caption: {
        title: "맛있는 귤젤리비타민",
        description: "하루 3구미로 간편 비타민C&D 충전",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/health/05.jpg`),
      caption: {
        title: "가볍게 비우고 채우자!",
        description: "콤부차/효소/단백질",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/health/06.jpg`),
      caption: {
        title: "인증된 상품만 모은",
        description: "건강기능식품",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/health/07.jpg`),
      caption: {
        title: "내몸을 위한 선택",
        description: "홍삼",
      },
    },
  ],
  child: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child/00.jpg`),
      caption: {
        title: "신학기 물티슈는 베베앙",
        description: "23만 후기 진짜 국민 물티슈",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child/01.png`),
      caption: {
        title: "인기 안전용품 특가",
        description: "카시트, 웨건, 안전문 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child/02.jpg`),
      caption: {
        title: "저자극 아기세제, 베베숲 홈",
        description: "잔여물 걱정없는 프리미엄 세제",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child/03.png`),
      caption: {
        title: "안전한 선택은 페넬로페",
        description: "페넬로페 기저귀&물티슈 기획전",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child/04.jpg`),
      caption: {
        title: "유아 캐릭터 식기 특가",
        description: "수저, 식판, 물통 등 입소 필수템",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child/05.jpg`),
      caption: {
        title: "남양 아이꼬야 브랜드위크",
        description: "최대 1만원 할인 행사",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child/06.png`),
      caption: {
        title: "똑똑하고 튼튼한 우리아이!",
        description: "영양간식부터 건강식품까지 총동원!",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child/07.jpg`),
      caption: {
        title: "믿고 쓰는 아토팜",
        description: "집중 보습 회복 아토팜",
      },
    },
  ],
  "child-fashion": [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child-fashion/00.jpg`),
      caption: {
        title: "책가방",
        description: "미리 준비하는 새 학기",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child-fashion/01.png`),
      caption: {
        title: "롤리트리 시즌 오프 할인",
        description: "내의/상하 세트 외 최대 30% 할인",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child-fashion/02.jpg`),
      caption: {
        title: "패딩",
        description: "따뜻하고 가볍게 겨울나기",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child-fashion/03.jpg`),
      caption: {
        title: "키즈 신학기 패션 SALE",
        description: "아우터 / 신발 / 가방 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child-fashion/04.png`),
      caption: {
        title: "F/W 유아동 의류 기획전",
        description: "릴리푸리 / 올리반 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child-fashion/05.jpg`),
      caption: {
        title: "내의",
        description: "포근한 홈웨어",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child-fashion/06.jpg`),
      caption: {
        title: "상하복 세트",
        description: "편하고 귀여운 의류",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/child-fashion/07.jpg`),
      caption: {
        title: "니트",
        description: "우리 아이 센스 있는 스타일링",
      },
    },
  ],
  kitchen: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/kitchen/00.png`),
      caption: {
        title: "달콤한 기념일을 위한",
        description: "주방용품 발렌타인데이 SALE",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/kitchen/01.jpg`),
      caption: {
        title: "머그컵",
        description: "쌀쌀한 날씨에 따뜻함 한 잔!",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/kitchen/02.jpg`),
      caption: {
        title: "휴대용가스렌지",
        description: "따뜻한 겨울 요리를 위한",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/kitchen/03.jpg`),
      caption: {
        title: "네스카페 돌체구스토 기획전",
        description: "집에서 즐기는 나만의 홈카페",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/kitchen/04.jpg`),
      caption: {
        title: "주방수납/정리",
        description: "깔끔한 주방을 위한",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/kitchen/05.jpg`),
      caption: {
        title: "홈인테리어&주방용품",
        description: "위클리 특가",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/kitchen/06.jpg`),
      caption: {
        title: "2월의 주방 SALE",
        description: "유아식기, 도시락통, 밀폐용기 등",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/kitchen/07.jpg`),
      caption: {
        title: "베이킹용품",
        description: "따끈따끈 베이킹의 모든 것",
      },
    },
  ],
  pets: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/pets/00.jpg`),
      caption: {
        title: "강아지 음료",
        description: "영양만점 갈증 해소",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/pets/01.jpg`),
      caption: {
        title: "로켓 펫스티벌 SALE",
        description: "반려용품의 모든것!",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/pets/02.jpg`),
      caption: {
        title: "강아지 간식 BEST",
        description: "황태, 육포, 껌, 수제간식 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/pets/03.jpg`),
      caption: {
        title: "고양이 스크래쳐",
        description: "냥님을 위한 선물",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/pets/04.jpg`),
      caption: {
        title: "취향 저격! 고양이장난감",
        description: "낚시대, 사냥놀이, 볼, 인형 외",
      },
    },
  ],
  hobby: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/hobby/00.jpg`),
      caption: {
        title: "아기 오감발달엔 사운드북",
        description: "튤립, 핑크퐁, 뽀로로 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/hobby/01.jpg`),
      caption: {
        title: "아이와 함께하는 클레이",
        description: "미니케이크, 토스트, 베이킹세트 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/hobby/02.jpg`),
      caption: {
        title: "인기완구 알뜰쇼핑!",
        description: "기간 한정 스페셜 할인",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/hobby/03.jpg`),
      caption: {
        title: "오늘은 주방놀이!",
        description: "요리에 푹빠진 우리 아이",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/hobby/04.jpg`),
      caption: {
        title: "꼬마 의사의 병원놀이",
        description: "역할놀이 하며 사회성을 길러요",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/hobby/05.jpg`),
      caption: {
        title: "집중해서 완성! 블록놀이",
        description: "맞추고 쌓으며 재미있게 놀아요",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/hobby/06.jpg`),
      caption: {
        title: "우리 아이 붕붕카",
        description: "하체 근력 강화에 도움이 돼요",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/hobby/07.jpg`),
      caption: {
        title: "재미있는 보드게임 추천!",
        description: "두뇌게임, 복불복, 카드게임 외",
      },
    },
  ],
  car: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/car/00.jpg`),
      caption: {
        title: "상쾌하고 쾌적한 공기",
        description: "자동차 공기청정기",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/car/01.jpg`),
      caption: {
        title: "타이어도 이젠 로켓설치",
        description: "무료배송, 무료설치, 배송일 지정 외",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/car/02.jpg`),
      caption: {
        title: "눈길 안전한 드라이빙",
        description: "스프레이 체인",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/car/03.png`),
      caption: {
        title: "쿠팡모터스 2월 한정 특가!",
        description: "차량 필수품 미리 준비하세요!",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/car/04.jpg`),
      caption: {
        title: "안전하고 스마트한 운전",
        description: "차량용 핸드폰거치대",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/car/05.jpg`),
      caption: {
        title: "핸들커버",
        description: "따뜻한 겨울준비",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/car/06.jpg`),
      caption: {
        title: "쉽고 간편한 청소",
        description: "차량용청소기",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/car/07.jpg`),
      caption: {
        title: "향기로운 드라이빙",
        description: "차량용방향제",
      },
    },
  ],
  book: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/book/00.png`),
      caption: {
        title: "트렌드코리아 2023",
        description: "누구보다 빠르게 2023년 캐칭",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/book/01.png`),
      caption: {
        title: "유아/어린이",
        description: "하루하루 성장하는 우리아이",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/book/02.png`),
      caption: {
        title: "자기계발",
        description: "내 인생을 아름답게!",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/book/03.png`),
      caption: {
        title: "가정 살림",
        description: "'엄마! 아빠!' 의 메뉴얼",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/book/04.png`),
      caption: {
        title: "만화",
        description: "중독성 강한 만화 시리즈",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/book/05.png`),
      caption: {
        title: "소설/에세이/시",
        description: "나는 나를 응원한다.",
      },
    },
  ],
  travel: [
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/travel/00.jpg`),
      caption: {
        title: "경주 휴림 풀빌라",
        description: "따뜻하게 즐기는 바베큐",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/travel/01.jpg`),
      caption: {
        title: "아난티 힐튼 부산",
        description: "도심 속 완벽한 휴식처",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/travel/02.jpg`),
      caption: {
        title: "경주 샵앤플렛 풀빌라",
        description: "#바다전망 #스파 #애견",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/travel/03.jpg`),
      caption: {
        title: "안면도 아일랜드 리솜",
        description: "탁트인 바다 앞 선셋스파",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/travel/04.jpg`),
      caption: {
        title: "라마다 속초 호텔",
        description: "와우회원 추가할인",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/travel/05.jpg`),
      caption: {
        title: "울진 덕구온천리조트",
        description: "와우회원 추가할인",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/travel/06.jpg`),
      caption: {
        title: "안산 플렉스 프라이빗 풀빌라",
        description: "한 팀만을 위한 독채 펜션",
      },
    },
    {
      url: "/",
      img: require(`../../assets/img/categoryBestUnit/travel/07.jpg`),
      caption: {
        title: "제주시 모퉁이작은집 스테이",
        description: "아름다운 판포포구를 한눈에",
      },
    },
  ],
};

const CategoryPromotion = ({ category }) => {
  const [btnHover, setBtnHover] = useState(false);
  const { count, start, stop, reset, resetNum } = useInterval(0, 2000);
  const len = items[`${category}`].length - 1;
  useEffect(() => {
    if (count > len) {
      reset();
    }
    start();
  }, [count, reset, start, len]);

  const onMouseEnter = () => {
    setBtnHover(true);
    stop();
  };
  const onMouseLeave = () => {
    setBtnHover(false);
    start();
  };

  const increaseIndex = () => {
    resetNum((prev) => (prev === len ? 0 : prev + 1));
    stop();
  };
  const decreaseIndex = () => {
    resetNum((prev) => (prev === 0 ? len : prev - 1));
    stop();
  };
  const onclick = (index) => {
    resetNum(index);
  };

  let button = btnHover && (
    <>
      <span
        onClick={decreaseIndex}
        className={`${styles["button"]} ${styles["prev"]} `}
      />
      <span
        onClick={increaseIndex}
        className={`${styles["button"]} ${styles["next"]} `}
      />
    </>
  );
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={styles["promotion"]}
    >
      {button}
      <ul className={styles["promotion__thumnail"]}>
        {items[`${category}`].map((item, itemindex) => (
          <li
            key={itemindex}
            className={`${
              count === itemindex ? styles["active"] : styles["none"]
            }`}
          >
            <Link to="/">
              <img src={item.img} alt={`${itemindex}`} />
            </Link>
            <span
              className={`${styles["promotion__caption"]} ${
                icons[category + "-bgcolor"]
              }`}
            >
              <p className={styles["promotion__caption-title"]}>
                {item.caption.title}
              </p>
              <p className={styles["promotion__caption-description"]}>
                {item.caption.description}
              </p>
            </span>
          </li>
        ))}
      </ul>
      <ul className={styles["promotion__dot"]}>
        {items[`${category}`].map((_, itemindex) => (
          <li
            onClick={() => onclick(itemindex)}
            key={itemindex}
            className={` ${
              count === itemindex ? styles["selected"] : styles["dot"]
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPromotion;
