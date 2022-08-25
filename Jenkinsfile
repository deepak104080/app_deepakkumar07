pipeline {
    agent any

    tools {
        git 'Default'
        nodejs 'nodejs'
    }

    environment {
        dockerhubcredentials = 'dockerhub'
        CLOUDSDK_CORE_PROJECT = 'astute-arcanum-351619'
    }

    stages {
        stage("Build") {
            steps {
                git changelog: false, credentialsId: '4ba785f3-ed0c-4a36-bdd0-8693f3669263', poll: false, url: 'https://github.com/deepak104080/app_deepakkumar07'
                echo 'building the application...'
                bat 'npm install'
            }
        }
        
        stage("Test") {
            steps {
                echo 'testing the application on master...'
                bat 'npm run test'
            }
        }

        stage("Docker") {
            steps {
                script {
                    dockerImage = docker.build 'deepak104080/i-deepakkumar07-master:latest'
                    docker.withRegistry('', dockerhubcredentials) {
                        dockerImage.push('latest')
                    }
                }
                bat 'docker logout'
            }
        }


        stage("Kubernetes Deployment") {
            steps {
                echo 'deploying the application kubernetes...'
                withCredentials([file(credentialsId: 'gcloud-creds', variable: 'GCLOUD_CREDS')]) {
                    bat 'gcloud container clusters get-credentials nagp-deepakkumar07 --zone us-central1-c --project astute-arcanum-351619'
                    bat 'kubectl apply -f deployment.yaml'
                    bat 'kubectl apply -f service.yaml'
                    bat 'kubectl get deployment -n kubernetes-cluster-deepakkumar07'
                }
                echo 'deployment done'
            }
        }
    }
}