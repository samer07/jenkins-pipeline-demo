
// pipeline {
//     agent any
//     tools{
//         maven 'Maven 3.9.9'
//     }
//     stages {
//         stage('Build') {
//             steps {
//                 script {
//                     echo 'Building the code...'
//                     // Your build steps here
//                     sh 'mvn clean package'
//                 }
//             }
//         }
//         stage('Unit and Integration Tests') {
//             steps {
//                 script {
//                     echo 'Running unit and integration tests...'
//                     // Your test steps here
//                     sh 'mvn test'
//                     sh 'mvn verify'
//                 }
//             }
//         }
//         stage('Code Analysis') {
//             steps {
//                 script {
//                     echo 'Performing code analysis...'
//                     // Your code analysis steps here
//                     sh 'mvn sonar:sonar'
//                 }
//             }
//         }
//         stage('Security Scan') {
//             steps {
//                 script {
//                     echo 'Performing security scan...'
//                     // Your security scan steps here
//                     sh 'dependency-check --project my-project --scan ./'
//                 }
//             }
//         }
//         stage('Deploy to Staging') {
//             steps {
//                 script {
//                     echo 'Deploying to staging environment...'
//                     // Your deployment steps here
//                     sh 'aws deploy create-deployment --application-name my-app --deployment-group-name staging-group --github-location repository=my-repo,commitId=my-commit-id'
//                 }
//             }
//         }
//         stage('Integration Tests on Staging') {
//             steps {
//                 script {
//                     echo 'Running integration tests on staging...'
//                     // Your integration tests steps here
//                     sh 'mvn verify -Pstaging'
//                 }
//             }
//         }
//         stage('Deploy to Production') {
//             steps {
//                 script {
//                     echo 'Deploying to production environment...'
//                     // Your deployment steps here
//                     sh 'aws deploy create-deployment --application-name my-app --deployment-group-name production-group --github-location repository=my-repo,commitId=my-commit-id'
//                 }
//             }
//         }
//     }
    
//     post {
//         success {
//             emailext(
//                 subject: "Build ${env.BUILD_NUMBER} - SUCCESS",
//                 body: "The build was successful!\n\nDetails: ${env.BUILD_URL}",
//                 to: 'sameeradhi1990@gmail.com'
//             )
//         }
//         failure {
//             emailext(
//                 subject: "Build ${env.BUILD_NUMBER} - FAILURE",
//                 body: "The build failed.\n\nDetails: ${env.BUILD_URL}\n\nLogs:\n${JENKINS_HOME}/jobs/${JOB_NAME}/builds/${BUILD_NUMBER}/log",
//                 to: 'sameeradhi1990@gmail.com'
//             )
//         }
//         always {
//             emailext(
//                 subject: "Build ${env.BUILD_NUMBER} - COMPLETED",
//                 body: "Build ${env.BUILD_NUMBER} has completed.\n\nDetails: ${env.BUILD_URL}\n\nLogs:\n${JENKINS_HOME}/jobs/${JOB_NAME}/builds/${BUILD_NUMBER}/log",
//                 to: 'sameeradhi1990@gmail.com'
//             )
//         }
//     }
// }

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
                        subject: "Security Scan Result: ${currentBuild.currentResult}",
                        body: "Security scan completed with result: ${currentBuild.currentResult}\n\n${env.BUILD_URL}securityScanResults",
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
