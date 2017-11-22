pipeline {
    agent any
    stages {
        stage('Stop all containers') {
            steps {
                sh 'docker stop $(docker ps -a -q)'
            }
        }
        stage('Delete all containers') {
            steps {
                sh 'docker rm $(docker ps -a -q) --force'
            }
        }
        stage('Delete all images') {
            steps {
                sh 'docker rmi $(docker images -aq) --force'
            }
        }
        stage('Run Docker Compose') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
