import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import CategoryItems from "../Components/CategoryItems";
import styles from "./Category.module.css";

const categoryItems = [
  {
    icon: "fashion",
    title: "패션의류/잡화",
    submenu: [
      {
        title: "여성패션",
        submenu: [
          { title: "의류" },
          { title: "속옷/잠옷" },
          { title: "신발" },
          { title: "가방/잡화" },
        ],
      },
      {
        title: "남성패션",
        submenu: [
          { title: "의류" },
          { title: "속옷/잠옷" },
          { title: "신발" },
          { title: "가방/잡화" },
        ],
      },
      {
        title: "남녀 공용 의류",
        submenu: [
          { title: "티셔츠" },
          { title: "맨투맨/후드티" },
          { title: "셔츠" },
          { title: "바지" },
          { title: "트레이닝복" },
          { title: "후드집업/집업류" },
          { title: "니트류/조끼" },
          { title: "아우터" },
          { title: "테마의류" },
          { title: "커플룩/패밀리룩" },
          { title: "빅사이즈" },
        ],
      },
      {
        title: "유아동패션",
        submenu: [{ title: "베이비" }, { title: "여아" }, { title: "남아" }],
      },
    ],
  },
  {
    icon: "beauty",
    title: "뷰티",
    submenu: [
      {
        title: "명품뷰티",
      },
      {
        title: "스킨케어",
        submenu: [
          { title: "스킨" },
          { title: "로션" },
          { title: "에센스/세럼/앰플" },
          { title: "미스트" },
          { title: "오일" },
          { title: "크림/올인원" },
          { title: "기초세트" },
          { title: "마스크/팩" },
          { title: "선케어/태닝" },
        ],
      },
      {
        title: "클린/비건뷰티",
        submenu: [
          { title: "스킨케어" },
          { title: "메잌업" },
          { title: "네일&툴" },
        ],
      },
      {
        title: "클렌징/필링",
        submenu: [
          { title: "클렌징 폼" },
          { title: "클렌징 젤/파우더" },
          { title: "클렌징 비누" },
          { title: "클렌징 오일" },
          { title: "클렌징 워터" },
          { title: "립/아이리무버" },
          { title: "클렌징 티슈/시트" },
          { title: "클렌징 로션/크림" },
          { title: "클렌징세트" },
          { title: "스크럽/필링" },
        ],
      },
      { title: "더마코스메틱" },
      {
        title: "메이크업",
        submenu: [
          { title: "베이스 메이크업" },
          { title: "아이 메이크업" },
          { title: "립 메이크업" },
          { title: "치크메이크업" },
          { title: "멀티메이크업" },
          { title: "바이메이크업" },
        ],
      },
      {
        title: "향수",
        submenu: [
          { title: "여성향수" },
          { title: "남성향수" },
          { title: "남녀공용향수" },
          { title: "고체향수" },
          { title: "드레스퍼퓸" },
        ],
      },
      {
        title: "남성화장품",
        submenu: [
          { title: "남성스킨케어" },
          { title: "남성메이크업" },
          { title: "남성화장품세트" },
          { title: "남성 헤어케어" },
          { title: "남성 바디케어" },
          { title: "남성 쉐이빙 케어" },
        ],
      },
      {
        title: "네일",
        submenu: [
          { title: "네일팁/스티커" },
          { title: "일반네일" },
          { title: "젤네일" },
          { title: "큐티클/영양" },
          { title: "네일케어도구" },
          { title: "네일아트소품/도구" },
          { title: "네일세트" },
        ],
      },
      {
        title: "뷰티소품",
        submenu: [
          { title: "화장솜/면봉" },
          { title: "아이소품" },
          { title: "페이스소품" },
          { title: "클렌징소품" },
          { title: "헤어소품" },
          { title: "피부관리기" },
          { title: "용기/거울/기타소품" },
        ],
      },
      {
        title: "어린이화장품",
        submenu: [
          { title: "메이크업" },
          { title: "향수" },
          { title: "네일케어" },
          { title: "세트/키트" },
        ],
      },
      { title: "로드샵" },
      {
        title: "헤어",
        submenu: [
          { title: "샴푸" },
          { title: "린스/컨디셔너" },
          { title: "트리트먼트/팩/앰플" },
          { title: "헤어에센스/오일" },
          { title: "헤어스타일링" },
          { title: "헤어세트" },
          { title: "염색/파마" },
        ],
      },
      {
        title: "바디",
        submenu: [
          { title: "샤워/입욕용품" },
          { title: "바디로션/크림" },
          { title: "핸드/풋/데오" },
          { title: "제모/슬리밍/청결제" },
        ],
      },
      {
        title: "선물세트/키트",
        submenu: [{ title: "선물세트" }, { title: "여행용키트" }],
      },
    ],
  },
  {
    icon: "child",
    title: "출산/유아동",
    submenu: [
      {
        title: "유아동패션",
        submenu: [{ title: "베이비" }, { title: "여아" }, { title: "남아" }],
      },
      {
        title: "기저귀",
        submenu: [
          { title: "일회용기저귀" },
          { title: "수영장기저귀" },
          { title: "천기저귀/액세서리" },
          { title: "배변훈련팬티" },
          { title: "기저귀케익" },
          { title: "기저귀크림/파우더" },
          { title: "기저귀매트" },
          { title: "기저귀통/봉투" },
          { title: "기저귀가방" },
        ],
      },
      {
        title: "물티슈",
        submenu: [
          { title: "물티슈" },
          { title: "건티슈" },
          { title: "물티슈액세서리" },
        ],
      },
      {
        title: "분유/어린이식품",
        submenu: [
          { title: "분유" },
          { title: "이유식" },
          { title: "미음/죽/분말" },
          { title: "양념/식재료" },
          { title: "국/반찬" },
          { title: "간식/음료" },
        ],
      },
      {
        title: "어린이 건강식품",
        submenu: [
          { title: "비타민/미네랄" },
          { title: "홍삼" },
          { title: "칼슘" },
          { title: "유산균/초유" },
          { title: "오메가" },
          { title: "기타 건강식품" },
        ],
      },
      {
        title: "수유용품",
        submenu: [
          { title: "젖병" },
          { title: "젖꼭지" },
          { title: "노리개젖꼭지" },
          { title: "치발기" },
          { title: "모유저장팩" },
          { title: "분유케이스/저장팩" },
          { title: "젖병세척용품" },
          { title: "젖병소독기/건조대" },
          { title: "분유보관용기" },
          { title: "수유패드" },
          { title: "유축기" },
          { title: "모유촉진제" },
          { title: "유두보호/젖몸살용품" },
          { title: "더보기" },
        ],
      },
      {
        title: "이유용품/유아식기",
        submenu: [
          { title: "이유식용품" },
          { title: "턱받이" },
          { title: "빨대컵/유아컵" },
          { title: "유아식기/캐릭터식기" },
          { title: "도시락/물병/보냉팩" },
          { title: "스푼/포크/젖가락" },
          { title: "유아식탁/부스터" },
        ],
      },
      {
        title: "매트/안전용품",
        submenu: [
          { title: "일반매트" },
          { title: "퍼즐매트" },
          { title: "폴더매트" },
          { title: "벽매트" },
          { title: "DIY/시공매트" },
          { title: "유아안전문" },
          { title: "모서리/코너보호대" },
          { title: "손낌방지용품" },
          { title: "잠금장치/커버" },
          { title: "미끄럼방지용품" },
          { title: "침대가드" },
          { title: "뒤집기방지쿠션" },
          { title: "머리/무릎보호대" },
          { title: "더보기" },
        ],
      },
      {
        title: "유모차/웨건",
        submenu: [
          { title: "디럭스유모차" },
          { title: "절충형유모차" },
          { title: "휴대용유모차" },
          { title: "쌍둥이유모차" },
          { title: "웨건" },
          { title: "유모차/웨건액세서리" },
        ],
      },
      {
        title: "카시트",
        submenu: [
          { title: "신생아바구니카시트" },
          { title: "영유아카시트" },
          { title: "주니어카시트" },
          { title: "부스터카시트" },
          { title: "카시트액세서리" },
        ],
      },
      {
        title: "아기띠/외출용품",
        submenu: [
          { title: "아기띠" },
          { title: "올인원 아기띠" },
          { title: "힙시트" },
          { title: "트레킹캐리어" },
          { title: "포대기/처네" },
          { title: "슬링" },
          { title: "아기띠액세서리" },
          { title: "기저귀가방" },
          { title: "기저귀/약파우치" },
          { title: "보닝백/런치백" },
        ],
      },
      {
        title: "욕실용품/스킨케어",
        submenu: [
          { title: "유아워시/샴푸" },
          { title: "유아구강케어" },
          { title: "유아스킨케어" },
          { title: "기저귀크림/파우더" },
          { title: "유아욕조/목욕의자" },
          { title: "유아목욕용품" },
          { title: "유아타올" },
          { title: "유아변기" },
          { title: "선케어/야외활동케어" },
          { title: "어린이화장품" },
        ],
      },
      {
        title: "위생/건강/세제",
        submenu: [
          { title: "위생용품" },
          { title: "유아향균지퍼팩" },
          { title: "배변훈련팬티" },
          { title: "건강용품" },
          { title: "유아세제/세정제" },
          { title: "야외활동용품" },
        ],
      },
      {
        title: "유아동침구",
        submenu: [
          { title: "낮잠이불" },
          { title: "겉싸개/속싸개" },
          { title: "유아이불" },
          { title: "베개/바디필로우" },
          { title: "유아담요/블랭킷" },
          { title: "유아 요/방수요" },
          { title: "침구세트" },
        ],
      },
      {
        title: "유아가구/인테리어",
        submenu: [
          { title: "유아동침대" },
          { title: "유아의자/소파" },
          { title: "수납/정리함" },
          { title: "공부상/책상" },
          { title: "유아책상/책꽂이" },
          { title: "수면등/수유등" },
          { title: "유아키재기스티커" },
        ],
      },
      {
        title: "완구/교구",
        submenu: [
          { title: "연령별완구" },
          { title: "캐릭터별완구" },
          { title: "신생아/영아완구" },
          { title: "블록놀이" },
          { title: "역할놀이" },
          { title: "로봇/작동완구" },
          { title: "인형" },
          { title: "물놀이/계절완구" },
          { title: "승용완구" },
          { title: "실내대형완구" },
          { title: "스포츠/야외완구" },
          { title: "STEAM/학습완구" },
          { title: "보드게임" },
          { title: "더보기" },
        ],
      },
      { title: "더보기" },
    ],
  },
  {
    icon: "food",
    title: "식품",
    submenu: [
      { title: "유기농/친환경 전문관" },
      {
        title: "과일",
        submenu: [
          { title: "사과/배" },
          { title: "귤/한라봉/감귤류" },
          { title: "감/홍시/곶감" },
          { title: "키위/참다래" },
          { title: "토마토/자두/복숭아/포도" },
          { title: "수박/메론/참외" },
          { title: "딸기/블루베리/베리류" },
          { title: "바나나/오렌지/파인애플" },
          { title: "자몽/레몬/라임/석류" },
          { title: "망고/체리/아보카도/기타" },
          { title: "냉동과일/간편과일" },
          { title: "과일선물세트" },
        ],
      },
      {
        title: "견과/건과",
        submenu: [
          { title: "땅콩/호두" },
          { title: "밤/잣/은행" },
          { title: "아몬드/피스타치오" },
          { title: "기타견과류" },
          { title: "호박씨/해바라기씨" },
          { title: "기타씨앗" },
          { title: "혼합견과/세트" },
          { title: "건과일/건채소" },
          { title: "과일가루" },
        ],
      },
      {
        title: "채소",
        submenu: [
          { title: "두부/콩나물" },
          { title: "감자/고구마" },
          { title: "당근/뿌리채소" },
          { title: "오이/고추/열매채소" },
          { title: "양파/마늘/파" },
          { title: "배추/무/김장채소" },
          { title: "시금치/나물/잎줄기채소" },
          { title: "상추/깻잎/쌈채소" },
          { title: "샐러드/손질채소" },
          { title: "새송이/버섯류" },
          { title: "인삼/건강차재료" },
          { title: "기타채소" },
          { title: "건나물/건채소" },
          { title: "더보기" },
        ],
      },
      {
        title: "쌀/잡곡",
        submenu: [
          { title: "백미" },
          { title: "현미/찹쌀/흑미" },
          { title: "기능성쌀/기타쌀" },
          { title: "콩/팥/보리" },
          { title: "조/수수/깨" },
          { title: "기타잡곡/혼합곡" },
          { title: "슈퍼곡물" },
          { title: "기타씨앗" },
          { title: "쌀/잡곡 가루" },
          { title: "곡류선물세트" },
        ],
      },
      {
        title: "축산/계란",
        submenu: [
          { title: "소고기" },
          { title: "돼지고기" },
          { title: "닭/오리고기" },
          { title: "양/말고기" },
          { title: "기타 육고기" },
          { title: "계란/알류/가공란" },
          { title: "축산선물세트" },
        ],
      },
      {
        title: "수산물/건어물",
        submenu: [
          { title: "생선" },
          { title: "오징어/낙지/연체류" },
          { title: "새우/게/갑각류" },
          { title: "전복/굴/조개류" },
          { title: "멸치/다시팩/기타" },
          { title: "김/미역/해조류" },
          { title: "건오징어/쥐포/어포" },
          { title: "황태/진미채" },
          { title: "생선알" },
          { title: "기타수산물/건어물" },
          { title: "수산물선물세트" },
        ],
      },
      {
        title: "생수/음료",
        submenu: [
          { title: "생수" },
          { title: "탄산수" },
          { title: "과일/야채음료" },
          { title: "탄산/스포츠음료" },
          { title: "커피음료/차음료" },
          { title: "두유" },
          { title: "냉장우유" },
          { title: "멸균우유" },
          { title: "숙취/건강음료" },
          { title: "어린이음료" },
          { title: "음료선물세트" },
          { title: "무/비알콜음료" },
          { title: "전통주" },
        ],
      },
      {
        title: "커피/원두차",
        submenu: [
          { title: "커피믹스" },
          { title: "원두/생두" },
          { title: "캡슐/더치/티백" },
          { title: "녹차/메밀차" },
          { title: "둥글레/옥수수차" },
          { title: "보리/우엉/결명차" },
          { title: "도라지/작두콩차" },
          { title: "홍차/밀크티" },
          { title: "유자/과일차" },
          { title: "율무/전통차" },
          { title: "허브/콤부/꽃차" },
          { title: "코코아/라떼/기타분말" },
          { title: "커피/차 선물세트" },
          { title: "더보기" },
        ],
      },
      {
        title: "과자/초콜릿/시리얼",
        submenu: [
          { title: "과자" },
          { title: "비스킷/크래커" },
          { title: "쿠키/파이" },
          { title: "전통과자/떡" },
          { title: "초콜릿" },
          { title: "젤리/캐러멜" },
          { title: "사탕/껌" },
          { title: "시리얼" },
          { title: "베이커리/잼" },
          { title: "육포/원물간식" },
          { title: "과자/간식세트" },
          { title: "어린이간식" },
        ],
      },
      {
        title: "면/통조림/가공식품",
        submenu: [
          { title: "라면/컵라면" },
          { title: "면류/파스타" },
          { title: "참치/햄/통조림" },
          { title: "즉석밥/누룽지" },
          { title: "카레/짜장/양념" },
          { title: "즉석국/간편조리" },
        ],
      },
      {
        title: "가루/조미료/오일",
        submenu: [
          { title: "가루/분말류" },
          { title: "설탕/소금/조미료" },
          { title: "식용유/오일" },
        ],
      },
      {
        title: "장/소스/드레싱/식초",
        submenu: [
          { title: "장류" },
          { title: "케찹/마요네즈" },
          { title: "머스타드" },
          { title: "소스" },
          { title: "드레싱" },
          { title: "식초/미림" },
          { title: "물엿/올리고당/조청" },
          { title: "육수/액젓" },
          { title: "꿀" },
        ],
      },
      {
        title: "유제품/아이스크림",
        submenu: [
          { title: "냉장우유" },
          { title: "멸균우유" },
          { title: "두유" },
          { title: "요구르트" },
          { title: "치즈" },
          { title: "버터/마가린" },
          { title: "생크림/휘핑크림" },
          { title: "연유" },
          { title: "기타유가공품" },
          { title: "유제품가정배달" },
          { title: "아이스크림" },
          { title: "기타 디저트" },
        ],
      },
      {
        title: "냉장/냉동/간편요리",
        submenu: [
          { title: "밀키트" },
          { title: "즉석밥/볶음밥" },
          { title: "즉석국/탕/찌개" },
          { title: "고기/해물/기타요리" },
          { title: "면류" },
          { title: "떡류" },
          { title: "만두/돈까스/치킨" },
          { title: "분식/피자/핫도그" },
          { title: "김치/젓갈/장류" },
          { title: "반찬/절임" },
          { title: "햄/어묵/맛살" },
          { title: "두부/샐러드/도시락" },
        ],
      },
      {
        title: "건강식품",
        submenu: [
          { title: "건강기능식품" },
          { title: "성인용 건강식품" },
          { title: "여성용 건강식품" },
          { title: "남성용 건강식품" },
          { title: "임산부 건강식품" },
          { title: "시니어 건강식품" },
          { title: "어린이 건강식품" },
          { title: "홍삼/인삼" },
          { title: "건강즙/음료" },
          { title: "비타민/미네랄" },
          { title: "영양제" },
          { title: "헬스보충식품" },
          { title: "다이어트/이너뷰티" },
          { title: "더보기" },
        ],
      },
      { title: "더보기" },
    ],
  },
  {
    icon: "kitchen",
    title: "주방용품",
    submenu: [
      {
        title: "주방가전",
        submenu: [
          { title: "전기밥솥" },
          { title: "전자레인지" },
          { title: "오븐" },
          { title: "가스레인지" },
          { title: "전기레인지" },
          { title: "식기세척/건조기" },
          { title: "믹서기/블렌더" },
          { title: "커피메이커/머신" },
          { title: "빙수기/제빙기" },
          { title: "전기포트" },
          { title: "에어프라이어" },
          { title: "튀김기" },
          { title: "토스터" },
          { title: "더보기" },
        ],
      },
      {
        title: "냄비/프라이팬",
        submenu: [
          { title: "냄비/뚝배기" },
          { title: "프라이팬" },
          { title: "냄비/프라이팬세트" },
          { title: "찜솥/들통" },
          { title: "압력솥/가마솥" },
        ],
      },
      {
        title: "주방조리도구",
        submenu: [
          { title: "조리도구" },
          { title: "조리도구세트" },
          { title: "가위/슬라이서스/스퀴져" },
          { title: "믹싱볼/대야" },
          { title: "채반/소쿠리" },
          { title: "다지기/절구/밀대" },
          { title: "석쇠/버너/화로" },
          { title: "야채탈수기" },
          { title: "간식/도시락조리도구" },
          { title: "베이킹용품" },
          { title: "칼" },
          { title: "도마" },
        ],
      },
      {
        title: "그릇/홈세트",
        submenu: [
          { title: "식기홈세트" },
          { title: "그릇/식기" },
          { title: "접시/플레이트" },
          { title: "식탁보/테이블매트" },
          { title: "쟁반/베드트레이" },
          { title: "이유/유아식기" },
          { title: "제기/제수용품" },
        ],
      },
      {
        title: "수저/커트러리",
        submenu: [
          { title: "수저/커트러리세트" },
          { title: "숟가락/티스푼" },
          { title: "젓가락" },
          { title: "포크/디저트포크" },
          { title: "나이프" },
          { title: "유아동수저" },
          { title: "서빙스푼/스쿱" },
          { title: "수저통/수저받침" },
        ],
      },
      {
        title: "컵/텀블러/와인용품",
        submenu: [
          { title: "머그/드링크차" },
          { title: "커피잔/찻잔" },
          { title: "텀블러/콜드컵" },
          { title: "유아동컵/빨대컵" },
          { title: "물컵/주스컵" },
          { title: "유리컵/맥주잔" },
          { title: "와인용품" },
          { title: "주류용품" },
          { title: "컵소품" },
        ],
      },
      {
        title: "주전자/커피/티용품",
        submenu: [
          { title: "주전자/티포트" },
          { title: "커피용품" },
          { title: "티용품" },
        ],
      },
      {
        title: "주방수납/정리",
        submenu: [
          { title: "공간별수납/정리" },
          { title: "식기건조대/선반" },
          { title: "주방정리소품" },
          { title: "교자상" },
        ],
      },
      {
        title: "밀페저장/도시락",
        submenu: [
          { title: "밀페보관용기" },
          { title: "특수저장용기" },
          { title: "양념통/오일병" },
          { title: "쌀통/잡곡통/항아리" },
          { title: "김치통/진공항아리" },
          { title: "물병/물통/텀블러" },
          { title: "도시락통/가방/찬합" },
          { title: "이유식조리보관" },
          { title: "유아동물병/도시락" },
        ],
      },
      {
        title: "주방잡화",
        submenu: [
          { title: "수세미/세척솔" },
          { title: "고무장갑" },
          { title: "행주" },
          { title: "앞치마/오븐장갑" },
          { title: "주방매트/다용도매트" },
          { title: "식탁보/테이블매트" },
          { title: "음식물쓰레기통" },
          { title: "싱크대용품" },
          { title: "아트보드/렌지가드" },
          { title: "계량/저울/타이머" },
          { title: "덮개/받침" },
          { title: "냅킨/주방수건" },
          { title: "오프너/병따개" },
          { title: "더보기" },
        ],
      },
      {
        title: "일회용품/종이컵",
        submenu: [
          { title: "랩/호일/유산지" },
          { title: "키친타올" },
          { title: "일회용장갑" },
          { title: "위생백/비닐봉투" },
          { title: "일회용컵" },
          { title: "일회용수저" },
          { title: "일회용용기/도시락" },
          { title: "배달일회용용품" },
          { title: "빨대/스트로우" },
          { title: "기타주방일회용품" },
        ],
      },
      {
        title: "보온/보냉용품",
        submenu: [
          { title: "보온/보냉병" },
          { title: "보온/보냉도시락" },
          { title: "보온죽통/푸드차" },
          { title: "보온/보냉텀블러" },
          { title: "보온/보냉주전자" },
          { title: "아이스박스/아이스백" },
          { title: "아이스물통/워터저그" },
          { title: "쿨러백/보온보냉소품" },
        ],
      },
      { title: "수입주방" },
      {
        title: "1인가구 주방용품",
        submenu: [
          { title: "1인 식기세트" },
          { title: "샐러드볼/시리얼볼" },
          { title: "미니밥솥" },
          { title: "냉동밥 보관용기" },
          { title: "홈바" },
          { title: "전자레인지" },
          { title: "전기레인지" },
          { title: "에어프라이어" },
          { title: "멀티포트/티포트" },
          { title: "핸드블렌더" },
          { title: "토스터" },
          { title: "냄비/프라이팬" },
          { title: "칼/가위/도마" },
          { title: "더보기" },
        ],
      },
    ],
  },
  {
    icon: "life",
    title: "생활용품",
    submenu: [
      {
        title: "방한용품",
        submenu: [
          { title: "손난로/핫팩" },
          { title: "보온/난방텐트" },
          { title: "단열에어캡/단열필름" },
          { title: "방풍비닐" },
          { title: "문풍지/틈막이" },
          { title: "폼블럭/단열벽지" },
          { title: "물기흡수 테이프" },
          { title: "방한커튼" },
          { title: "찜질용품" },
          { title: "좌훈용품" },
          { title: "아이마스크" },
        ],
      },
      {
        title: "헤어",
        submenu: [
          { title: "샴푸/린스" },
          { title: "트리트먼트/팩/앰플" },
          { title: "스타일링/케어/세트" },
          { title: "염색/파마" },
        ],
      },
      {
        title: "바디/세안",
        submenu: [
          { title: "샤워/입욕용품" },
          { title: "바디로션/크림" },
          { title: "핸드/풋/데오" },
          { title: "제모/슬리밍/청결제" },
          { title: "클렌징/필링" },
        ],
      },
      {
        title: "구강/면도",
        submenu: [
          { title: "면도기/날" },
          { title: "면도크림/젤" },
          { title: "치약" },
          { title: "칫솔" },
          { title: "전동칫솔/칫솔모" },
          { title: "치약/칫솔 세트" },
          { title: "구강청결제" },
          { title: "치실/치간칫솔" },
          { title: "치아미백제" },
          { title: "구강보조용품" },
        ],
      },
      {
        title: "화장지/물티슈",
        submenu: [
          { title: "화장지" },
          { title: "갑티슈/여행용티슈" },
          { title: "물티슈/비데티슈" },
          { title: "키친타올" },
        ],
      },
      {
        title: "생리대/성인기저귀",
        submenu: [
          { title: "일반생리대" },
          { title: "오버나이트" },
          { title: "팬티라이너" },
          { title: "체내형/생리컵" },
          { title: "면 생리대" },
          { title: "산모/임산부패드" },
          { title: "위생/생리팬티" },
          { title: "성인기저귀" },
          { title: "여성청결제" },
        ],
      },
      {
        title: "기저귀",
        submenu: [
          { title: "일회용기저귀" },
          { title: "수영장기저귀" },
          { title: "천기저귀/액세서리" },
          { title: "배변훈련팬티" },
          { title: "기저귀케익" },
          { title: "기저귀크림/파우더" },
          { title: "기저귀정리함" },
          { title: "기저귀매트" },
          { title: "기저귀통/봉투" },
          { title: "기저귀가방" },
        ],
      },
      {
        title: "세탁세제",
        submenu: [
          { title: "액체세제" },
          { title: "분말세제" },
          { title: "캡슐세제" },
          { title: "시트세제" },
          { title: "섬유유연제" },
          { title: "울세제/홈드라이세제" },
          { title: "향기지속제" },
          { title: "표백제" },
          { title: "세탁비누" },
          { title: "얼룩/찌든때 제거제" },
          { title: "운동화/가죽크리너" },
          { title: "유아세제/섬유유연제" },
          { title: "세제선물세트" },
        ],
      },
      {
        title: "청소/주방세제",
        submenu: [
          { title: "친환경/천연세제" },
          { title: "청소세제" },
          { title: "주방세제" },
          { title: "세제선물세트" },
        ],
      },
      {
        title: "탈취/방향/살충",
        submenu: [
          { title: "탈취제" },
          { title: "제습제" },
          { title: "방향제" },
          { title: "캔들/디퓨저" },
          { title: "살충제/벌레약" },
          { title: "야외활동케어" },
          { title: "방충용품" },
          { title: "곰팡이/진드기" },
        ],
      },
      {
        title: "건강/의료용품",
        submenu: [
          { title: "마스크" },
          { title: "의약외품/상비용품" },
          { title: "눈/렌즈용품" },
          { title: "코/수면용품" },
          { title: "자세교정/보호대" },
          { title: "마사지용품" },
          { title: "한방/찜질용품" },
          { title: "건강측정용품" },
          { title: "전문의료옹품" },
          { title: "건강액세서리" },
          { title: "활동보조용품" },
        ],
      },
      {
        title: "성인용품(19)",
        submenu: [
          { title: "콘돔" },
          { title: "러브젤" },
          { title: "성인 완구/게임(19)" },
          { title: "성인용품세트(19)" },
          { title: "성인 란제리(19)" },
          { title: "성인 코스튬(19)" },
          { title: "성인 가구(19)" },
          { title: "구속/처벌 용품(19)" },
          { title: "성인 도서/DVD(19)" },
          { title: "금연/흡연용품(19)" },
        ],
      },
      {
        title: "세탁/청소용품",
        submenu: [
          { title: "청소용품" },
          { title: "밀대/청소포" },
          { title: "빨래건조대" },
          { title: "빨래용품" },
          { title: "휴지통" },
          { title: "분리수거함" },
          { title: "먼지제거/클리너" },
          { title: "세탁/다림용품" },
        ],
      },
      {
        title: "욕실용품",
        submenu: [
          { title: "샤워기/헤드" },
          { title: "목욕/샤워용품" },
          { title: "수건/타월" },
          { title: "욕실수납/정리" },
          { title: "욕실화" },
          { title: "욕실매트/발판" },
          { title: "욕조" },
          { title: "세면대/세면기" },
          { title: "변기/비데용품" },
          { title: "욕실거울" },
          { title: "욕실용품/잡화" },
          { title: "유아욕실용품" },
          { title: "수전용품" },
          { title: "더보기" },
        ],
      },
      {
        title: "생활전기용품",
        submenu: [
          { title: "멀티탭/연장선" },
          { title: "전구/램프" },
          { title: "조명기구/부속" },
          { title: "전선정리용품" },
          { title: "전기설비/자재" },
          { title: "건전지/배터리" },
        ],
      },
      {
        title: "수납/정리",
        submenu: [
          { title: "선반/진열대" },
          { title: "리빙박스" },
          { title: "이사박스/종이박스" },
          { title: "수납장/서랍장" },
          { title: "바구니/칸막이" },
          { title: "행거" },
          { title: "옷걸이" },
          { title: "압축팩/커버" },
          { title: "슈즈렉/우산꽂이" },
          { title: "수납케이스" },
          { title: "욕실정리용품" },
          { title: "휴지통/분리수거함" },
        ],
      },
      { title: "더보기" },
    ],
  },
  {
    icon: "interior",
    title: "홈인테리어",
  },
  {
    icon: "digital",
    title: "가전디지털",
  },
  {
    icon: "sports",
    title: "스포츠/레저",
  },
  {
    icon: "car",
    title: "자동차용품",
  },
  {
    icon: "book",
    title: "도서/음반/DVD",
  },
  {
    icon: "hobby",
    title: "완구/취미",
  },
  {
    icon: "office",
    title: "문구/오피스",
  },
  {
    icon: "pet",
    title: "반려동물용품",
  },
  {
    icon: "health",
    title: "헬스/건강식품",
  },
  {
    icon: "travel",
    title: "여행/티켓",
  },
  {
    icon: "theme",
    title: "테마관",
  },
];
const Category = () => {
  return (
    <div className={styles["category"]}>
      <p className={styles["category--p"]}>카테고리</p>
      <ul className={styles["menus"]}>
        {categoryItems.map((menu, idx) => {
          const depth = 0;
          return <CategoryItems items={menu} key={idx} depth={depth} />;
        })}
      </ul>
    </div>
  );
};

export default Category;
