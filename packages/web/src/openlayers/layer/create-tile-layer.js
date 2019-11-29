import { construct } from 'ramda';
import TileLayer from 'ol/layer/Tile';

/**
 * @typedef TileLayerOptions
 * @property {TileSource} source
 *
 * @see https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html
 *
 * @type {function(TileLayerOptions):TileLayer}
 */
export const createTileLayer = construct(TileLayer);
