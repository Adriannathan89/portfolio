FROM oven/bun:1.3.14-alpine AS dependencies
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM dependencies AS build
COPY . ./
RUN bun run build

FROM oven/bun:1.3.14-alpine AS production-dependencies
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

FROM node:24-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY package.json ./
COPY --from=production-dependencies /app/node_modules ./node_modules
COPY --from=build /app/build ./build
COPY --from=build /app/public ./public
COPY --from=build /app/server.mjs ./server.mjs

RUN mkdir -p /app/.data && chown -R node:node /app
USER node

EXPOSE 3000
VOLUME ["/app/.data"]
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD wget --spider --quiet http://127.0.0.1:3000/ || exit 1

CMD ["node", "server.mjs"]
