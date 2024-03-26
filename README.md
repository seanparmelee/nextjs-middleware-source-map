## Middleware Source Map is Missing in Standalone Mode

Steps to reproduce:
1. Run `npm run build`
2. Examine the `.next/standalone/.next/server/` directory and note that `middleware.js.map` does not exist.
3. Comment out the `output: "standalone"` in the `next.config.js` file
4. Run `npm run build`
5. Examine the `.next/server/` directory and note that `middleware.js.map` does exist.
