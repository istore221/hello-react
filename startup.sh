
export VERSION=$(node -e "console.log(require('./package.json').version)")
docker-compose up -d --build
