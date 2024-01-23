FROM node:18.8-alpine as base

FROM base as builder

RUN curl -fsSL https://get.pnpm.io/install.sh | SHELL=`which bash` bash -
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /home/node/app
COPY package*.json ./

# Install pnpm

COPY . .
RUN pnpm install
RUN pnpm build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json  ./
COPY pnpm-lock.yaml ./

RUN pnpm install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 5000

CMD ["node", "dist/server.js"]
