// import { createOvermind } from 'overmind';
// import { Provider } from 'overmind-react';
// import * as React from 'react';
// import { render } from 'react-dom';
// import { app as overmind } from './app';
// import App from "./js/FileUploader";
import App from "./js/MoveableTest";

// import "./styles.css"
//MW CurrentModule handles the rendering and imports that stule information
import { CurrentModule } from "./js/CurrentModule";
if (module.hot) {
  module.hot.accept(["./js/app", "./js/components/FrontPage"], () => {
    CurrentModule(App);
  });
}

CurrentModule(App);
