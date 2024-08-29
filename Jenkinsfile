pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the code using custom build script'
                sh './build.sh'  // Adjust the command according to your build script
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Running unit and integration tests'
                sh './run-tests.sh'  // Adjust the command according to your test script
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Running code analysis'
                sh './run-code-analysis.sh'  // Adjust the command according to your analysis script
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Running security scan'
                sh './run-security-scan.sh'  // Adjust the command according to your security scan script
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging environment'
                sh './deploy-to-staging.sh'
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Running integration tests on staging environment'
                sh './run-integration-tests-staging.sh'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to production environment'
                sh './deploy-to-production.sh'
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
