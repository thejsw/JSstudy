import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 함수 생성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초깃값 정의
const initialState = {
  number: 0,
};

// 리듀서 함수 생성
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
