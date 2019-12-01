import TileLayer from 'ol/layer/Tile';
import { createTileLayer } from './create-tile-layer';

describe('createLine', () => {
  it('should create an instance of OpenLayers LineString class', () => {
    expect(createTileLayer({})).toBeInstanceOf(TileLayer);
  });
});
