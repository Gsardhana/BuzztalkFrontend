node{
stage('Checkout'){
git branch: 'main', url: 'https://github.com/Gsardhana/BuzztalkFrontend.git'
}
stage('NPM Install'){
bat 'npm install'
}
stage('Build'){
bat 'npm run build'
}
stage('Create Image')
{
bat 'docker build -t image2:v1 .'
}
stage('Create Container')
{
bat 'docker container create -p 4200:4200 --name container2 image2:v1'
}
stage('Start Container')
{
bat 'docker start container2'
}
}

