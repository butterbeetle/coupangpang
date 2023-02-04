import React, { useState } from "react";

const items = [
  {
    key: 0,
    title: "여성패션",
    styles: "woman-clothes",
    keywords: ["반팔 티셔츠", "원피스", "청바지", "에코백", "샌들", "에코백"],
    visible: true,
  },
  {
    key: 1,
    title: "남성패션",
    styles: "man-clothes",
    keywords: ["반팔 티셔츠", "반바지", "리넨 팬츠", "슬리퍼", "카드지갑"],
    visible: true,
  },
  {
    key: 2,
    title: "뷰티",
    styles: "beauty",
    keywords: [
      "수분토너",
      "에센스/세럼/앰플",
      "아이라이너",
      "립틴트",
      "톤업크림",
      "클렌징티슈",
    ],
    visible: true,
  },
  {
    key: 3,
    title: "출산/유아동",
    styles: "child",
    keywords: [
      "물티슈구매가이드",
      "이유용품/유아식기",
      "아기과자",
      "출산준비물",
      "임부용품",
      "카시트",
    ],
    visible: true,
  },
  {
    key: 4,
    title: "식품",
    styles: "food",
    keywords: ["저탄고지", "비타민", "다이어트", "타트체리", "간편식", "야식"],
    visible: true,
  },
  {
    key: 5,
    title: "주방용품",
    styles: "kitchen",
    keywords: [
      "베이킹용품",
      "주방수납/정리",
      "조리도구세트",
      "휴대용가스렌지",
      "냄비",
      "텀블러",
    ],
    visible: true,
  },
  {
    key: 6,
    title: "생활용품",
    styles: "living",
    keywords: [
      "바디워시",
      "화장실방향제",
      "제습제",
      "액체세제",
      "뽑아쓰는키친타올",
      "헤어스프레이",
    ],
    visible: true,
  },
  {
    key: 7,
    title: "가구/홈인테리어",
    styles: "interior",
    keywords: [
      "F/W침구",
      "옷걸이/도어훅",
      "리빙박스",
      "담요",
      "방한용품",
      "암막커튼",
    ],
    visible: true,
  },
  {
    key: 8,
    title: "가전/디지털",
    styles: "digital",
    keywords: [
      "태블릿PC",
      "공기청정기",
      "게이밍모니터",
      "마사지기",
      "블루투스스피커",
    ],
    visible: true,
  },
  {
    key: 9,
    title: "스포츠/레저",
    styles: "sports",
    keywords: [
      "스키/방한용품",
      "골프연습용품",
      "요가/필라테스웨어",
      "스포츠보호대",
      "캠핑전문관",
    ],
    visible: true,
  },
  {
    key: 10,
    title: "자동차용품",
    styles: "car",
    keywords: [
      "스노우체인",
      "핸들커버",
      "차량용청소기",
      "차랑용방향제",
      "핸드폰거치대",
      "자동차 공기청정기",
    ],
    visible: true,
  },
  {
    key: 11,
    title: "완구/취미",
    styles: "hobby",
    keywords: [
      "레고",
      "눈집게",
      "눈썰매",
      "주방놀이",
      "RC카",
      "드론",
      "목욕놀이",
    ],
    visible: true,
  },
  {
    key: 12,
    title: "문구/오피스",
    styles: "office",
    keywords: [
      "필통",
      "색종이",
      "스케치북",
      "보석십자수",
      "쇼핑백",
      "문구세트",
    ],
    visible: true,
  },
  {
    key: 13,
    title: "도서/CD/DVD",
    styles: "book",
    keywords: [
      "흔한남매",
      "색칠공부",
      "한글공부",
      "요리책",
      "종이접기책",
      "컬러링북",
    ],
    visible: true,
  },
  {
    key: 14,
    title: "반려동물용품",
    styles: "pets",
    keywords: [
      "배변패드",
      "이동장",
      "노즈워크",
      "강아지계단",
      "고양이모래",
      "어항",
    ],
    visible: true,
  },
  {
    key: 15,
    title: "여행",
    styles: "travel",
    keywords: [
      "단독특가패션",
      "와우회원여행할인",
      "일본여행",
      "여수호텔",
      "호텔뷔페",
      "전시/뮤지엄",
    ],
    visible: true,
  },
  {
    key: 16,
    title: "유아동패션",
    styles: "child-fashion",
    keywords: ["원피스", "상하복 세트", "실내복", "운동화", "유아동 실내화"],
    visible: true,
  },
  {
    key: 17,
    title: "헬스/건강식품",
    styles: "health",
    keywords: [
      "멀티비타민",
      "타트체리",
      "비타민D",
      "프리바이오틱스",
      "보스웰리아",
    ],
    visible: true,
  },
];

// 3300 부터 600씩 늘어나게 18개
const offsets = Array(18)
  .fill(3400)
  .map((arr, i) => (arr += 600 * i));

export const SideMenuContext = React.createContext({
  click: false,
  sideBarItems: items,
  settingItems: items,
  saveItems: items,
  setSettingItems: () => {},
  onReset: () => {},
  onCancel: () => {},
  onConfirm: () => {},
  onVisible: () => {},
  onClick: () => {},
  scrollOffset: () => {},
});

export const SideMenuProvider = ({ children }) => {
  const [click, setClick] = useState(false);
  const [sideBarItems, setSideBarItems] = useState(items);
  const [settingItems, setSettingItems] = useState(items);
  const [saveItems, setSaveItems] = useState(items);

  // 설정창 열기/닫기
  const onClick = () => {
    setClick((prev) => !prev);
  };

  //초기화 (setting <- default)
  const resetItems = () => {
    setSaveItems(settingItems);
    setSettingItems(items);
  };
  //취소
  const onCancel = () => {
    setSettingItems(saveItems);
    onClick();
  };
  //확인 (sideMenu <- setting)
  const onConfirm = () => {
    setSideBarItems(settingItems.filter((item) => item.visible));
    setSaveItems(settingItems);
    onClick();
  };
  //체크 해제
  const visibleHandler = (key) => {
    setSettingItems(
      settingItems.map((item) =>
        item.key === key ? { ...item, visible: !item.visible } : item
      )
    );
    setSaveItems(settingItems);
  };

  //offset 설정
  const scrollOffset = (index) => {
    // console.log(offsets, index, offsets[index]);
    window.scroll({
      top: offsets[index] + 10,
      behavior: "smooth",
    });
  };

  const contextValue = {
    click,
    sideBarItems,
    settingItems,
    saveItems,
    onReset: resetItems,
    onCancel: onCancel,
    onConfirm: onConfirm,
    onVisible: visibleHandler,
    onClick: onClick,
    setSettingItems,
    scrollOffset,
  };

  return (
    <SideMenuContext.Provider value={contextValue}>
      {children}
    </SideMenuContext.Provider>
  );
};

export default SideMenuProvider;
