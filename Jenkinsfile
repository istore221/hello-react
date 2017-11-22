pipeline {
    agent any
    environment {
       IMAGE = 'istore221/hello-react'
       VERSION = sh(returnStdout: true, script: 'echo 0.0.1')
     }
    stages {
        stage('Run Docker Compose') {
            steps {
                sh 'echo ${VERSION}'
                sh 'docker-compose up -d --build'
            }
        }
        stage('Remove Unused Images') {
            steps {
                sh 'docker rmi $(docker images -q -f dangling=true) --force || exit 0'
                sh 'docker rmi $(docker images | grep -w ${IMAGE} | tail -n +2 | awk "{print $3}") --force || exit 0'
            }
        }
    }
}

//node -e "console.log(require('./package.json').version);"
