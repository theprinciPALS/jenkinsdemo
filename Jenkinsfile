pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        echo 'Testing...'
        sh 'npm install --save'
        sh 'npm test'
      }
    }
    stage('Build') {
      steps {
        echo 'Docker building!'
        sh 'docker build .'
        sh 'docker tag . principals/jenkinsdemo'
        sh 'docker push principals/jenkinsdemo'
      }
    }
  }
}
