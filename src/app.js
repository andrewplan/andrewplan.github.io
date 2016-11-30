import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-swiper';

import './components/index/index.scss';
import './components/componentsModule.js';

import config from './app.config.js';

angular
    .module( 'myPortfolio', [ uiRouter, 'ksSwiper', 'components' ] )
    .config( config )
