node {
  checkout scm
}

pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
    }
}
