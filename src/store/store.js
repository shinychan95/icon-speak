import { createStore } from "redux";

/**
 * MaskMap Action Type
 */

const SET_MAP = "setMap";
const SET_STORE_LIST = "setStoreList";
const ADD_MARKER = "addMarker";

// state를 설정할 때, 입력받는 parameter가 존재하고,
// action type에 따라 reducer를 통해 state가 업데이트 된다
const setMap = (map) => {
  return {
    type: SET_MAP,
    map: map
  }
};

const setStoreList = (storeList) => {
  return {
    type: SET_STORE_LIST,
    storeList: storeList
  };
};

const addMarker = (marker) => {
  return {
    type: ADD_MARKER,
    marker: marker
  }
};

// state를 변경시키는 reducer
const reducer = (state = {
  searchMap: {
    map: null,
    storeList: [],
    markers: []
  }
}, action) => {
  console.log(action);
  switch (action.type) {
    case SET_MAP:
      return {
        ...state,  // ...은 ES6에서 제안된 문법으로 Rest Operator와 Spread Operator로 나뉜다.
        searchMap: { // Rest Operator는 변수가 너무 많을 때, 나머지를 배열로 리턴하는 것이고
          ...state.searchMap, // Spread Operator는 배열이라면 원소들을 나열하고, 오브젝트라면 열거할수 있는 프로퍼티들을 나열합니다.
          map: action.map // 즉, 여기서는 searchMap 이외의 것들(제일 첫 줄), 그리고 searchMap에서 map을 제외한 나머지는 그대로를 의미한다.
        }
      };

    case SET_STORE_LIST:
      return {
        ...state,
        searchMap: {
          ...state.searchMap,
          storeList: action.storeList
        }
      };

    case ADD_MARKER:
      console.log("adding... :",action);
      return {
        ...state,
        searchMap: {
          ...state.searchMap,
          markers: action.marker,
        }
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  setStoreList,
  setMap,
  addMarker
};

export default store;