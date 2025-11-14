pipeline {
    agent any
  
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/UsmanBajwa48/Wiki-101.git'
            }
        }

        stage('build') {
            steps {
                
                    echo 'build stage'
            }
        }

      stage('Test') {
            steps {
                
                    echo 'test stage'
            }
        }

        stage('Deploy') {
            steps {
                    echo 'Deploying application...'
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up...'
        }
        
        success {
            // This block will run if the pipeline is successful
            echo 'Build succeeded!'
        }
        
        failure {
            // This block will run if the pipeline fails
            echo 'Build failed.'
        }
    }
}
