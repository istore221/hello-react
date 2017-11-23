pipeline {
    agent any
    environment {
       IMAGE = 'istore221/hello-react'
       VERSION = sh(returnStdout: true, script: 'node -e \"console.log(require(\'./package.json\').version);\"')
     }
    stages {
        stage('Run Docker Compose') {
            steps {
                sh 'env'
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
