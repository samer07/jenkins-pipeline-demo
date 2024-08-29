pipeline {
    agent any
    
    tools {
        maven 'Maven3'  // Use the name you provided in the Global Tool Configuration
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the code using Maven'
                sh 'mvn clean package'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Running unit and integration tests using JUnit'
                sh 'mvn test'
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Running code analysis using SonarQube'
                sh 'sonar-scanner'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Running security scan using OWASP Dependency-Check'
                sh 'dependency-check.sh'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging environment'
                sh 'scp target/app.jar user@staging-server:/path/to/deploy/'
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Running integration tests on staging environment'
                sh 'run-integration-tests.sh'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to production environment'
                sh 'scp target/app.jar user@production-server:/path/to/deploy/'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
            emailext(subject: 'Pipeline Success',
                     body: 'Pipeline completed successfully.',
                     to: 'sameeradhi1990@gmail.com',
                     attachLog: true)
        }
        failure {
            echo 'Pipeline failed.'
            emailext(subject: 'Pipeline Failure',
                     body: 'Pipeline failed.',
                     to: 'sameeradhi1990@gmail.com',
                     attachLog: true)
        }
    }
}
