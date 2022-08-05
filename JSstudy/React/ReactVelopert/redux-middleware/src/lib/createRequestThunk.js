import { startLoading, finishLoading } from "../modules/loading";

//  createRequestThunk('GET_USERS', api.getUsers)
export default function createRequestThunk(type, request) {
  // 액션 타입 지정
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  // 요청 결과에 따른 디스패치 반환
  return (params) => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(startLoading(type));
      throw e;
    }
  };
}
