pipeline {
    agent any
    stages {
        stage('Build & Run Docker Image') {
            steps {
                sh 'groups'
                sh 'docker build -t test .'
            }
        }
    }
}
