import { Feature } from 'ol';
import { construct } from 'ramda';

/**
 * @typedef FeatureConstructorArguments
 * @property {Geometry} geometry
 *
 * @type {function(FeatureConstructorArguments):Feature}
 */
export const createFeature = construct(Feature);
