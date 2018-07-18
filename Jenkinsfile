pipeline {
  agent any
  stages {
    stage('npm build') {
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