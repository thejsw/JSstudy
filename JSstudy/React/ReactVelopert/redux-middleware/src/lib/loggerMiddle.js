const loggerMiddle = (store) => (next) => (action) => {
  console.group(action && action.type);
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action);
  console.log("다음 상태", store.getState());
  console.groupEnd();
};

// 재귀함수 구조
// const loggerMiddle = function loggerMiddle(store) {
// return function(next) {
//     return function(action) {
//       미들웨어 기본 구조
//     }
//   }
// }

// store: 리덕스 스토어 인스턴스
// next: 미들웨어에 처리해야 할 액션 전달, (미들웨어에서 처리할 액션이) 없다면 리듀서에게 액션 전달
// action: 디스패치된 액션
//
export default loggerMiddle;
