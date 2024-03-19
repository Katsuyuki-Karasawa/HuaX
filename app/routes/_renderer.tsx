import { jsxRenderer } from 'hono/jsx-renderer'

export default jsxRenderer(({ children }) => {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {import.meta.env.PROD ? (
          <link href='/static/assets/style.css' rel='stylesheet' />
        ) : (
          <link href='/app/style.css' rel='stylesheet' />
        )}
      </head>
      <body>{children}</body>
    </html>
  )
})
