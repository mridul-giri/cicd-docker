FROM oven/bun:1

WORKDIR /app

COPY ./packages ./packages
COPY ./package.json ./package.json
COPY ./bun.lock ./bun.lock
COPY ./turbo.json .turbo.json
COPY ./apps/ws .apps/ws

RUN bun install
RUN bun run db:generate

EXPOSE 8081

CMD ["bun", "run", "start:ws"]