pipeline {
    agent any
    stages {
        stage('Run Docker Compose') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
        stage('Remove Old Images') {
            steps {
                sh '''
                docker rmi $(docker images -q -f dangling=true)
                if [ $? -eq 0 ]
                  then
                    echo "The script ran ok"
                    exit 0
                  else
                    echo "The script failed" >&2
                    exit 0
                  fi
                '''
                //sh 'set -e docker rmi $(docker images -q -f dangling=true)' //remove <none> images
                //sh 'set -e docker rmi $(docker images | grep istore221/hello-react | tail -n +2 | awk "{print $3}") --force'
            }
        }
    }
}
