import { Feature } from 'ol';
import { createFeature } from './create-feature';

describe('createFeature', () => {
  it('should create an instance of OpenLayers Feature class', () => {
    expect(createFeature({ geometry: null })).toBeInstanceOf(Feature);
  });
});
