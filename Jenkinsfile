pipeline {
    agent any

    tools {
        git 'Default'
        nodejs 'nodejs'
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
            if(env.BRANCH_NAME == 'master') {
                steps {
                    echo 'testing the application on master...'
                    bat 'npm run test'
                }
            }
            else {
                steps {
                    echo 'testing the application on develop...'
                    bat 'npm run test'
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