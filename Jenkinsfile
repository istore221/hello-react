pipeline {
    agent any
    stages {
        stage('Build & Run Docker Image') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
