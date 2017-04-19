import axios from 'axios';

export const FETCH_AUTOBIO = 'FETCH_AUTOBIO';
export const FETCH_ABOUTME = 'FETCH_ABOUTME';
export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';

export function fetchAutobio(){
  const request = axios.get('./json/autobio_content.json');

  return {
    type:FETCH_AUTOBIO,
    payload:request
  };
}

export function fetchAboutMe(){
  const request = axios.get('./json/about_content.json');

  return {
    type:FETCH_ABOUTME,
    payload:request
  };
}

export function fetchPortfolio(){
  const request = axios.get('./json/portfolio_content.json');

  return {
    type:FETCH_PORTFOLIO,
    payload:request
  };
}
