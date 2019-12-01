import { OSM } from 'ol/source';
import { createOSMSource } from './create-osm-source';

describe('createOSMSource', () => {
  it('should create an instance of OpenLayers OSM class', () => {
    expect(createOSMSource({})).toBeInstanceOf(OSM);
  });
});
