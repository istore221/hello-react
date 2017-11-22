pipeline {
    agent any

    stages {
        stage('Run Docker Compose') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
        stage('Remove Unused Images') {
            steps {
                sh '''
                  docker rmi $(docker images | grep istore221/hello-react | tail -n +2 | awk "{print $3}") --force
                  exit 0
                '''
            }
        }
    }
}
