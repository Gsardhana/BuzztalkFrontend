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
stage('Deploy'){
bat 'npm restart all'
}
}

