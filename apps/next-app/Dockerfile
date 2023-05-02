ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine AS base

FROM base AS builder

WORKDIR /app
COPY . .

RUN apk update && \
    apk add --no-cache \
    libc6-compat && \
    yarn global add turbo && \
    turbo prune --scope=dash --docker

FROM base AS installer

WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

ARG TURBO_TEAM \
    TURBO_TOKEN

ENV TURBO_TEAM=${TURBO_TEAM} \
    TURBO_TOKEN=${TURBO_TOKEN}

RUN apk update && \
    apk add --no-cache \
    libc6-compat && \
    yarn global add pnpm && \
    pnpm i && \
    yarn turbo run db:generate && \
    yarn turbo run build --filter=dash...

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

COPY --from=installer /app/apps/dash/next.config.mjs .
COPY --from=installer /app/apps/dash/package.json .
COPY --from=installer /app/apps/dash/public ./apps/dash/public

COPY --from=installer --chown=nextjs:nodejs /app/apps/dash/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/dash/.next/static ./apps/dash/.next/static

ARG DATABASE_URL \
    NEXTAUTH_SECRET \
    GOOGLE_CLIENT_ID \
    GOOGLE_CLIENT_SECRET

ENV DATABASE_URL=${DATABASE_URL} \
    NEXTAUTH_SECRET=${NEXTAUTH_SECRET} \
    GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID} \
    GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET} \
    PORT=8080 \
    NODE_ENV=production

EXPOSE 8080

CMD node apps/dash/server.js