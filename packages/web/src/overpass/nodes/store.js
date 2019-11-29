const nodes = new Map();

/**
 * @typedef {Object} OverpassNode
 * @property {Number} id
 */

/**
 *
 * @param {OverpassNode} node
 *
 * @returns {Map<Number, OverpassNode>}
 */
export const set = node => nodes.set(node.id, node);

/**
 *
 * @param {OverpassNode} node
 *
 * @returns {boolean}
 */
export const has = node => nodes.has(node.id);
