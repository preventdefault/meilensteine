import { LineString } from 'ol/geom';
import { constructN } from 'ramda';

/**
 * @type {function(Coordinate):LineString}
 */
export const createLine = constructN(1, LineString);
