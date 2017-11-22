pipeline {
    agent any
    stages {
        stage('Run Docker Compose') {
            steps {
                sh 'echo ""salalalalaa""'
                sh 'docker-compose up -d --build'
            }
        }
        stage('Remove Untagged Images') {
            steps {
                sh 'docker rmi $(docker images | grep "^<none>" | awk "{print $3}") --force'
            }
        }
    }
}
