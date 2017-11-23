pipeline {
    agent any
    environment {
       IMAGE = 'istore221/hello-react'
       VERSION = sh(returnStdout: true, script: 'node -e \"console.log(require(\'./package.json\').version);\"')
    }
    parameters {
       booleanParam(defaultValue: false, description: '', name: 'deployProd')
     }
    stages {
        stage('Run Docker Compose') {
            steps {
                echo "deployProd: ${params.deployProd}"
                sh './startup.sh'
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
