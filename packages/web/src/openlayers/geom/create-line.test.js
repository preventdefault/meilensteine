import { LineString } from 'ol/geom';
import { createLine } from './create-line';

describe('createLine', () => {
  it('should create an instance of OpenLayers LineString class', () => {
    expect(createLine([0, 0])).toBeInstanceOf(LineString);
  });
});
