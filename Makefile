.PHONY: server client

server:
	bun dev

client:
	cd client && bun dev

image:
	docker build --build-arg VITE_DOMAIN_URL=https://vope.local --build-arg DOMAIN_URL=https://vope.local -t vope-local .

image-no-cache:
	docker build --no-cache --build-arg VITE_DOMAIN_URL=https://vope.local --build-arg DOMAIN_URL=https://vope.local -t vope-local .

up: image
	docker run --rm -l dev.orbstack.domains=vope.local vope-local

build:
	cd client && bun run build
