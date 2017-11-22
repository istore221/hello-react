pipeline {
    agent any

    environment {
      IMAGE_NAME = 'istore221/hello-react'
    }

    stages {
        stage('Run Docker Compose') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
        stage('Remove Unused Images') {
            steps {
                sh '''
                  docker rmi $(docker images -q -f dangling=true) --force
                  docker rmi $(docker images | grep ${env.IMAGE_NAME} | tail -n +2 | awk "{print $3}") --force
                  exit 0
                '''
            }
        }
    }
}
