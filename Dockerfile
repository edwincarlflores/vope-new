# Adjust BUN_VERSION as desired
ARG BUN_VERSION=1.1.12
FROM oven/bun:${BUN_VERSION} as base

# Bun app lives here
WORKDIR /app

ARG DOMAIN_URL
ARG VITE_DOMAIN_URL

# Set production environment
ENV NODE_ENV=production
ENV DOMAIN_URL=$DOMAIN_URL
ENV VITE_DOMAIN_URL=$VITE_DOMAIN_URL

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
  apt-get install -y python-is-python3 pkg-config build-essential 

# Install node modules
COPY --link bun.lockb package.json ./
RUN bun install --ci

# Copy application code
COPY --link . .

RUN cd /app/client && bun install --frozen-lockfile && bun run build

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "bun", "server/src/index.ts" ]
