import {FETCH_AUTOBIO,FETCH_ABOUTME,FETCH_PORTFOLIO} from '../actions/index';

const INIT_STATE = {autobio_content:null,about_content:null,portfolio_content:null};

export default function(state=INIT_STATE,action){
  switch(action.type){
    case FETCH_AUTOBIO:
      return {...state,autobio_content:action.payload.data};

    case FETCH_ABOUTME:
      return {...state,about_content:action.payload.data};

    case FETCH_PORTFOLIO:
      return {...state,portfolio_content:action.payload.data};

    default:
      return state;
  }
}
