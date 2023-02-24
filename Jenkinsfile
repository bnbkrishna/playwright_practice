pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.30.0-focal'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm install
          npx playwright install
        '''
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
      post {
        always {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
    }
  }
}
