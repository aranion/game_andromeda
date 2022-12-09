import type { Request, Response } from 'express';
import { configureStoreSSR } from './store';
import { getInitialState } from './store/getInitialState';
import { serializeRenderObject } from './utils/serializeRenderObject';
import path from 'path';
import fs from 'fs';
// @ts-ignore
import { render } from '../../client/dist/ssr/entry-server.cjs';

export default (req: Request, res: Response) => {
  const location = req.url;
  const context: Record<string, any> = {};

  const { store } = configureStoreSSR(getInitialState(location), {
    url: location,
  });
  store.dispatch({ type: '@@redux/INIT' });

  const reactHtml = render(store, location);
  const reduxState = store.getState();

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  const resultHtml = getHtml(reactHtml, reduxState);

  res.status(context.statusCode || 200).send(resultHtml);
};

function getHtml(reactHtml: string, reduxState = {}) {
  const template = path.resolve(
    __dirname,
    '../../client/dist/client/index.html'
  );
  const preloadedStore = `
  <script>
    window.__PRELOADED_STATE__=${serializeRenderObject(reduxState)}
  </script>`;

  const htmlString = fs.readFileSync(template, 'utf-8');
  const result = htmlString
    .replace('<!--ssr-outlet-->', reactHtml)
    .replace('<!--store-outlet-->', preloadedStore);

  return result;
}
