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
stage('deploy'){
steps{
bat 'npm restart all'
}
}
}
}
