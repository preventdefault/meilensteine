import { fromLonLat } from 'ol/proj';
import {
  createMap,
  createOSMSource,
  createTileLayer,
  createView,
} from './openlayers';

export const map = createMap({
  layers: [
    createTileLayer({
      source: createOSMSource({}),
    }),
  ],
  view: createView({
    center: fromLonLat([13.6044524, 52.7510394]),
    zoom: 15,
  }),
});
