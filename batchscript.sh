ng build --prod --output-path docs --base-href /future-time-zone/
git add .
git commit -m "Fix bug with time formatting "
git push origin master
ng deploy