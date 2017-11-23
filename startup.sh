export BUILD_ENV=${1:-'dev'}
export VERSION=$(node -e "console.log(require('./package.json').version)")
docker-compose up -d --build
