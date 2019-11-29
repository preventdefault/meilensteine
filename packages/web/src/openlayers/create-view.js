import { construct } from 'ramda';
import { View } from 'ol';

/**
 * @type {function(ViewOptions):View}
 */
export const createView = construct(View);
