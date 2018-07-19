pipeline {
  agent any
  stages {
    stage('npm build') {
      steps {
        sh 'pwd'
      }
    }
    stage('docker build') {
      steps {
        sh 'docker-compose build'
      }
    }
  }
}