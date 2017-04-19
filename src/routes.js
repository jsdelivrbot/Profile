import React from 'react';
import {Route,IndexRoute} from 'react-router';

import App from './components/app';
import Autobiography from './components/autobiography';
import Portfolio from './components/portfolio';
import AboutMe from './components/aboutme';

export default(
  <Route path="/" component={App} >
    <IndexRoute component={Portfolio} />
    <Route path="aboutme" component={AboutMe} />
    <Route path="autobiography" component={Autobiography} />
  </Route>
);
