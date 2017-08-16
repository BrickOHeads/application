import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Homepage from './Component/Homepage.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Baselayout from './Component/Baselayout.js';
const gitHubRepoName = 'brickoheads.github.io';
// The domain for your site
// SET THIS: e.g. http://subdomain.example.tld, or http://www.example.tld
const domain = 'http://brittanyarsi.com';
function redirectToDomain() {
  window.location.replace(domain);
}


ReactDOM.render(
  <BrowserRouter>
    <Baselayout>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </Baselayout>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
