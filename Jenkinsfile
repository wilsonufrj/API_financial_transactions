pipeline{
    agent any

    stages {
        stage('Build Image'){
            steps{
                script{
                    dockerapp = docker.build("wilsonramo/api/api-financial-transaction" , '-f ./src/Dockerfile .src')
                }
            }
        }
    }
}
