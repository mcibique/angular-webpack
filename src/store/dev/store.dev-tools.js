import { createDevTools } from 'redux-devtools';
import { render } from 'react-dom';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';
import React from 'react';
import { Provider } from 'react-redux';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' changeMonitorKey='ctrl-m' defaultIsVisible={false}>
    <LogMonitor theme='tomorrow' />
    <SliderMonitor keyboardEnabled />
  </DockMonitor>
);

/* @ngInject */
export function runDevTools($ngRedux, $rootScope) {
  render(
    <Provider store={$ngRedux}>
      <div>
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('dev-tools')
  );
  // Hack to reflect state changes when disabling/enabling actions via the monitor
  $ngRedux.subscribe(function () {
    setTimeout($rootScope.$apply.bind($rootScope), 100);
  });
}

export default DevTools;
