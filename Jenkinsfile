pipeline{
agent any
stages {
stage('Checkout'){
steps{
git branch: 'main', url: 'https://github.com/Gsardhana/BuzztalkFrontend.git'
}
}
stage('Install'){
steps{
bat 'npm install'
}
}
stage('Build'){
steps{
bat 'npm run-script build'
}
}
stage('Build Image'){
steps{
bat 'docker build -t image2:v1 .'
}
}
stage('Create Container')
{
steps{
bat 'docker container create -p 4200:4200 --name container2 image2:v1'
}
}
stage('Start Container')
{
steps{
bat 'docker start container2'
}
}
}
}
