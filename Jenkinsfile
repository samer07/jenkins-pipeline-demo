pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                echo 'Running unit and integration tests...'
            }
            post {
                always {
                    emailext (
                        subject: "Unit and Integration Tests Result: ${currentBuild.currentResult}",
                        body: "Tests completed with result: ${currentBuild.currentResult}\n\n${env.BUILD_URL}testResults",
                        to: 'sameeradhi1990@gmail.com'
                    )
                }
            }
        }
        stage('Code Analysis') {
            steps {
                echo 'Performing code analysis...'
            }
        }
        stage('Security Scan') {
            steps {
                echo 'Performing security scan...'
            }
            post {
                always {
                    emailext (
                        subject: "Pipeline ${currentBuild.fullDisplayName} - ${currentBuild.result}",
                        body: """<p>${env.JOB_NAME} - Build # ${env.BUILD_NUMBER} - ${currentBuild.result}</p>""",
                        to: 'sameeradhi1990@gmail.com'
                    )
                }
            }

        }
        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging...'
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                echo 'Running integration tests on staging...'
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to production...'
            }
        }
    }
}
