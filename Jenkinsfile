pipeline {
    agent any

    tools {
        git 'Default'
        nodejs 'nodejs'
    }

    environment {
        dockerhubcredentials = credentials('deepak104080-dockerhub')
    }

    stages {
        stage("checkout") {
            steps {
                git changelog: false, credentialsId: '4ba785f3-ed0c-4a36-bdd0-8693f3669263', poll: false, url: 'https://github.com/deepak104080/app_deepakkumar07'
            }
        }

        stage("build") {
            steps {
                echo 'building the application...'
                bat 'npm install'
            }
        }

        
        stage("test") {
            steps {
                echo 'testing the application on master...'
                bat 'npm run test'
            }
        }


        stage("docker") {
            steps {
                script {
                    dockerImage = docker.build 'deepak104080/i-deepakkumar07-master:latest'
                    docker.withRegistry('', dockerhubcredentials) {
                        dockerImage.push('v2')
                    }
                }
            }
        }
        

        stage("deploy") {
            steps {
                echo 'deploying the application...'
            }
        }
    }
}