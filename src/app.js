import ng from 'angular';
import uiRouter from 'angular-ui-router';

import config from './app.config';
import run from './app.run';
import main from './states/main/main.module';
import './app.scss';

ng.module('myApp', [uiRouter, main])
  .config(config)
  .run(run);
