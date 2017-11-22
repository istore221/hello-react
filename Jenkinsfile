pipeline {
    agent any
    stages {
        stage('Build & Run Docker Image') {
            steps {
                sh 'gpasswd -a $USER docker'
                sh 'docker build -t test .'
            }
        }
    }
}
