pipeline {
  agent {
    docker {
      image 'alpine'
    }
    
  }
  stages {
    stage('Test') {
      agent {
        docker {
          image 'alpine'
        }
        
      }
      steps {
        echo 'Testing...'
        sh 'npm test'
      }
    }
  }
}