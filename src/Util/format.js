/** 핸드폰번호 포맷을 000-0000-0000 처럼 변환해주는 함수 */
export const phoneFormat = (phone) => {
  return phone.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3");
};

/**
 * ms를 day(요일), month(월), date(일) 로 변환해주는 함수
 * @param {*} ms 밀리세컨드
 * @returns day, month, date
 */
export const dateFormat = (ms) => {
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date(ms);
  const tomorrow = new Date(today.setDate(today.getDate() + 1));

  return {
    day: day[tomorrow.getDay()],
    month: tomorrow.getMonth() + 1,
    date: tomorrow.getDate(),
  };
};
