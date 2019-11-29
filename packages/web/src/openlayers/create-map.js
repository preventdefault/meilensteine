import { construct } from 'ramda';
import { Map } from 'ol';

/**
 * @type {function(MapOptions):Map}
 */
export const createMap = construct(Map);
