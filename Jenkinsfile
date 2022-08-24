pipeline {
    agent any

    tools {
        git 'Default'
        nodejs 'nodejs'
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('deepak104080-dockerhub')
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

        stage("docker login") {
            steps {
                echo 'docker login'
                bat 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage("docker push") {
            steps {
                echo 'docker push'
                bat 'docker push deepak104080/i-deepakkumar07-master:latest'
            }   
        }

        stage("docker logout") {
            steps {
                echo 'docker logout'
                bat 'docker logout'
            }   
        }
        

        stage("deploy") {
            steps {
                echo 'deploying the application...'
            }
        }
    }
}