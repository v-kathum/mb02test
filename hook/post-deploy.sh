az functionapp config appsettings set -n minut-rhp -g minut-rhp-rg --settings minut-db_DOCUMENTDB="AccountEndpoint=https://minut-db.documents.azure.com:443/;AccountKey=LeVtIh77Qhe7BysE3yyje1V2r9wN3hvsuorqcdMHYCoILxIra1WdpoB54Drw5nx2H0DebuL0637BETWpP9Bvig==;"
az functionapp restart -n minut-rhp -g minut-rhp-rg
