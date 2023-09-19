# Blog-Bun-Docker

This is a repo from my blog article showing how to [Run a Bun server on Plesk with Docker]().

## Installation

Make sure you have [Bun](https://bun.sh/) installed and run `bun install`.

## Dev

Run the dev process with `bun start`.

## Building

Build a docker image with `docker build -t bun-react:v1 .`

And save it to a file with `docker save -o bun-react.tar.gz bun-react:v1`

---

Check out my [blog article]() to see how to deploy it on a Plesk instance.
