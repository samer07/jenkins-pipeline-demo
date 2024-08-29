pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // This step builds the code using Maven
                echo 'Building the code using Maven'
                sh 'mvn clean package'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                // This step runs unit tests and integration tests using JUnit
                echo 'Running unit and integration tests using JUnit'
                sh 'mvn test'
            }
        }

        stage('Code Analysis') {
            steps {
                // This step runs code analysis using SonarQube
                echo 'Running code analysis using SonarQube'
                sh 'sonar-scanner'
            }
        }

        stage('Security Scan') {
            steps {
                // This step performs a security scan using OWASP Dependency-Check
                echo 'Running security scan using OWASP Dependency-Check'
                sh 'dependency-check.sh'
            }
        }

        stage('Deploy to Staging') {
            steps {
                // This step deploys the application to the staging environment
                echo 'Deploying to staging environment'
                sh 'scp target/app.jar user@staging-server:/path/to/deploy/'
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                // This step runs integration tests in the staging environment
                echo 'Running integration tests on staging environment'
                sh 'run-integration-tests.sh'
            }
        }

        stage('Deploy to Production') {
            steps {
                // This step deploys the application to the production environment
                echo 'Deploying to production environment'
                sh 'scp target/app.jar user@production-server:/path/to/deploy/'
            }
        }
    }

    post {
        success {
            // This step sends an email when the pipeline succeeds
            echo 'Pipeline completed successfully.'
            emailext(subject: 'Pipeline Success',
                     body: 'Pipeline completed successfully.',
                     to: 'sameeradhi1990@gmail.com',
                     attachLog: true)
        }
        failure {
            // This step sends an email when the pipeline fails
            echo 'Pipeline failed.'
            emailext(subject: 'Pipeline Failure',
                     body: 'Pipeline failed.',
                     to: 'sameeradhi1990@gmail.com',
                     attachLog: true)
        }
    }
}
