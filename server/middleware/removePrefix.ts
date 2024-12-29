export default defineEventHandler((event) => {
  if (event.req.url?.startsWith('/back')) {
    event.req.url = event.req.url.replace('/back', '')
  }
})
