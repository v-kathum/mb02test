az functionapp config appsettings set -n minut-rhp -g minut-rhp-rg --settings \
FUNCTIONS_EXTENSION_VERSION=2.0.11961-alpha \
minut-db_DOCUMENTDB="AccountEndpoint=https://minut-db.documents.azure.com:443/;AccountKey=LeVtIh77Qhe7BysE3yyje1V2r9wN3hvsuorqcdMHYCoILxIra1WdpoB54Drw5nx2H0DebuL0637BETWpP9Bvig==;" \
minut-queue-cosmosdb="DefaultEndpointsProtocol=https;AccountName=xwndxp5fkg55aazfunctions;AccountKey=qstDUZJzjrp2kM8nBcoImcA1t56QbE7o/OSgW6EHV4bRM5gV52CbUgWjSyNh7AhghUY8D+hwYvy6GSBc7AeiJw==;EndpointSuffix=core.windows.net" \
minut-queue-postgresdb="DefaultEndpointsProtocol=https;AccountName=xwndxp5fkg55aazfunctions;AccountKey=qstDUZJzjrp2kM8nBcoImcA1t56QbE7o/OSgW6EHV4bRM5gV52CbUgWjSyNh7AhghUY8D+hwYvy6GSBc7AeiJw==;EndpointSuffix=core.windows.net"

az functionapp restart -n minut-rhp -g minut-rhp-rg
