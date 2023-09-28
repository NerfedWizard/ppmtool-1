echo "Switching to branch main"
git checkout main

echo "Pulling latest changes..."
git pull

echo "Building the project..."
npm run build

echo "Deploying the project..."
scp -r build/* loel@172.233.212.30:/var/www/172.233.212.30/

echo "Done!"

