pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Build steps using Maven
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                // Run unit and integration tests
            }
            post {
                always {
                    script {
                        def testStatus = currentBuild.currentResult
                        emailext (
                            to: 'recipient@example.com',
                            subject: "Test Stage ${testStatus}: ${env.JOB_NAME} Build #${env.BUILD_NUMBER}",
                            body: "The Unit and Integration Tests have ${testStatus}. See attached logs.",
                            attachmentsPattern: '**/test-logs/*.log'
                        )
                    }
                }
            }
        }

        stage('Code Analysis') {
            steps {
                // Run SonarQube analysis
            }
        }

        stage('Security Scan') {
            steps {
                // Perform security scan using OWASP Dependency-Check
            }
            post {
                always {
                    script {
                        def scanStatus = currentBuild.currentResult
                        emailext (
                            to: 'recipient@example.com',
                            subject: "Security Scan ${scanStatus}: ${env.JOB_NAME} Build #${env.BUILD_NUMBER}",
                            body: "The Security Scan has ${scanStatus}. See attached logs.",
                            attachmentsPattern: '**/security-scan/*.log'
                        )
                    }
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                // Deploy to staging environment
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                // Run integration tests on staging
            }
        }

        stage('Deploy to Production') {
            steps {
                // Deploy to production environment
            }
        }
    }

    post {
        success {
            // Optional global success email
        }
        failure {
            // Optional global failure email
        }
    }
}
