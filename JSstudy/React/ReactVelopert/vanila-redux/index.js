import { createStore } from "redux";

// DOM 레퍼런스
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 타입
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초깃값
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        toggle: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        toggle: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어
const store = createStore(reducer);

// render
const render = () => {
  const state = store.getState();
  // 토글
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  // 카운터
  counter.innerText = state.counter;
};

render();

// 구독
store.subscribe(render);

// 액션 발생
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
