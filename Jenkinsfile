pipeline{
    agent any
    
    stages{
        
        stage("Code"){
            steps{
                echo "this is cloning the code"
                git url: "https://github.com/KetanKumar3/HYDRA-VR-Website.git", branch: "main"
                echo "code clone successful"
            }
        }
        stage("Build"){
            steps{
                echo "this is build the code"
                sh "docker build -t hydra-vr:latest ."
            }
        }
        stage("Test"){
            steps{
                echo "this is test the code"
            }
        }
        stage("Deploy"){
            steps{
                echo "this is deploy the code"
                sh "docker run -d -p 5173:5173 hydra-vr:latest"
                echo "Successfully Done"
            }
        }
    }
}