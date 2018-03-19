pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        echo 'Testing...'
        sh 'npm test'
      }
    }
    stage('Build') {
      steps {
        echo 'Docker building!'
        sh 'docker build'
        sh 'docker push principals/jenkinsdemo'
      }
    }
  }
}
