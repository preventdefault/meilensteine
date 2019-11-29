import { construct } from 'ramda';
import { OSM } from 'ol/source';

/**
 * @typedef OSMSourceOptions
 *
 * @see https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html
 *
 * @type {function():OSM}
 */
export const createOSMSource = construct(OSM);
