/* eslint import/no-extraneous-dependencies: 0 */
import {loadPluginCss} from 'grafana/app/plugins/sdk';
import WorldmapCtrl from './worldmap_ctrl';

loadPluginCss({
  dark: 'plugins/wordmap-panel/css/worldmap.dark.css',
  light: 'plugins/wordmap-panel/css/worldmap.light.css'
});

export {
  WorldmapCtrl as PanelCtrl
};
