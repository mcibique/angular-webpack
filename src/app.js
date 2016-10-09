import ng from 'angular';
import router from 'angular-ui-router';

import './app.scss';

import config from './app.config';
import run from './app.run';
import main from './states/main/main.module';

ng.module('myApp', [router, main])
  .config(config)
  .run(run);
