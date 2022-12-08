import serialize from 'serialize-javascript';

export const serializeRenderObject = (data: unknown) =>
  serialize(data).replace(/</g, '\\\u003c');
