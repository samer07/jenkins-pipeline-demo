pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building the code...'
                    // Use a build automation tool like Maven
                    sh 'mvn clean install'
                }
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                script {
                    echo 'Running unit and integration tests...'
                    // Use test automation tools like JUnit or TestNG
                    sh 'mvn test'
                }
            }
        }
        stage('Code Analysis') {
            steps {
                script {
                    echo 'Performing code analysis...'
                    // Use a code analysis tool like SonarQube
                    sh 'sonar-scanner'
                }
            }
        }
        stage('Security Scan') {
            steps {
                script {
                    echo 'Performing security scan...'
                    // Use a security scan tool like OWASP ZAP or Snyk
                    sh 'snyk test'
                }
            }
        }
        stage('Deploy to Staging') {
            steps {
                script {
                    echo 'Deploying to staging...'
                    // Deploy to staging, e.g., AWS EC2 instance
                    sh 'ssh ec2-user@staging-server "deploy-script.sh"'
                }
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                script {
                    echo 'Running integration tests on staging...'
                    // Run integration tests on staging environment
                    sh 'run-staging-tests.sh'
                }
            }
        }
        stage('Deploy to Production') {
            steps {
                script {
                    echo 'Deploying to production...'
                    // Deploy to production, e.g., AWS EC2 instance
                    sh 'ssh ec2-user@production-server "deploy-script.sh"'
                }
            }
        }
    }
    post {
        always {
            emailext (
                to: 'sameeradhi1990@gmail.com',
                subject: "Jenkins Pipeline: Stage ${currentBuild.currentResult}",
                body: "Pipeline has completed with status: ${currentBuild.currentResult}. Check attached logs.",
                attachLog: true
            )
        }
    }
}
