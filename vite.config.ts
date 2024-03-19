import devServer from '@hono/vite-dev-server'
import ssg from '@hono/vite-ssg'
import mdx from '@mdx-js/rollup'
import tailwindcss from '@tailwindcss/vite'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { defineConfig } from 'vite'

const entry = './app/server.ts'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['/app/style.css'],
          output: {
            assetFileNames: 'static/assets/[name].[ext]',
          },
        },
      },
    }
  }
  return {
    build: {
      emptyOutDir: false,
    },
    plugins: [
      honox(),
      ssg({ entry }),
      devServer({ entry }),
      mdx({
        jsxImportSource: 'hono/jsx',
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
      tailwindcss(),
    ],
  }
})
