pipeline {
    agent any
    environment {
        // Assuming you have added credentials with ID 'smtp-credentials'
        SMTP_CREDENTIALS_ID = 'smtp-credentials'
    }
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building the code...'
                    // Your build steps here
                }
            }
        }
    }
    post {
        success {
            emailext(
                subject: "Build ${env.BUILD_NUMBER} - SUCCESS",
                body: "The build was successful!\n\nDetails: ${env.BUILD_URL}",
                to: 'recipient@example.com',
                // Using credentials for email configuration
                credentialsId: SMTP_CREDENTIALS_ID
            )
        }
        failure {
            emailext(
                subject: "Build ${env.BUILD_NUMBER} - FAILURE",
                body: "The build failed.\n\nDetails: ${env.BUILD_URL}\n\nLogs:\n${JENKINS_HOME}/jobs/${JOB_NAME}/builds/${BUILD_NUMBER}/log",
                to: 'recipient@example.com',
                credentialsId: SMTP_CREDENTIALS_ID
            )
        }
    }
}
pipeline {
    agent any
    environment {
        // Assuming you have added credentials with ID 'smtp-credentials'
        SMTP_CREDENTIALS_ID = 'smtp-credentials'
    }
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building the code...'
                    // Your build steps here
                }
            }
        }
    }
    post {
        success {
            emailext(
                subject: "Build ${env.BUILD_NUMBER} - SUCCESS",
                body: "The build was successful!\n\nDetails: ${env.BUILD_URL}",
                to: 'sameeradhi1990@gmail.com',
                // Using credentials for email configuration
                credentialsId: SMTP_CREDENTIALS_ID
            )
        }
        failure {
            emailext(
                subject: "Build ${env.BUILD_NUMBER} - FAILURE",
                body: "The build failed.\n\nDetails: ${env.BUILD_URL}\n\nLogs:\n${JENKINS_HOME}/jobs/${JOB_NAME}/builds/${BUILD_NUMBER}/log",
                to: 'sameeradhi1990@gmail.com',
                credentialsId: SMTP_CREDENTIALS_ID
            )
        }
    }
}
