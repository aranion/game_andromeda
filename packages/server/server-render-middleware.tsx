import { configureStoreSSR } from './store';
import { getInitialState } from './store/getInitialState';
import { serializeRenderObject } from './utils/serializeRenderObject';
import path from 'path';
import fs from 'fs';
// @ts-ignore
import { render } from '../../client/dist/ssr/entry-server.cjs';
import type { Request, Response } from 'express';
import type { StaticRouterContext } from 'react-router';

export default (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};

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

function getHtml(reactHtml: string, reduxState: Record<string, unknown>) {
  const template = path.resolve(__dirname, '../../client/dist/ssr/index.html');
  const preloadedState = `
  <script>
    window.__PRELOADED_STATE__=${serializeRenderObject(reduxState)}
  </script>`;

  const htmlString = fs.readFileSync(template, 'utf-8');
  const result = htmlString
    .replace('<!--ssr-outlet-->', reactHtml)
    .replace('<!--store-outlet-->', preloadedState);

  return result;
}
