$remote="https://$($env:GH_USER):$($env:GH_DEPLOY_KEY)@github.com/robdy/polskie-pokemony.github.io.git"
$branch='master'
New-Item -name gh-pages -itemType directory
Set-Location gh-pages
git init
git config user.email "$env:GH_EMAIL"
git config user.name "$env:GH_NAME"
git remote add --fetch origin "$remote"
git checkout $branch
git pull $remote $branch
git rm -rf .
Copy-Item ../public/* -Destination "."
git add -A
git commit --allow-empty -m "$(Get-Date -Format g) Deploy to GH Pages"
git push --quiet "$remote" $branch
Set-Location ..
Remove-Item gh-pages -Force -Recurse
