import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineEventHandler(async (event) => {
  const proxy = createProxyMiddleware('back', {
    target: 'http://localhost:5000',
    pathRewrite: { '^/back': '' },
    changeOrigin: false,
  });

  return new Promise((resolve, reject) => {
    proxy(event.req, event.res, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
});