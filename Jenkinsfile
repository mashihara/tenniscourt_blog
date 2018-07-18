pipeline {
  agent none
  stages {
    stage('npm build') {
      agent {
        docker {
          image 'node'
          args '8.11'
        }
        
      }
      steps {
        sh 'npm run build'
      }
    }
    stage('docker build') {
      steps {
        sh 'docker-compose build'
      }
    }
  }
}