# Minut API and frontend

This is a serverless project. All functions are defined in `serverless.yml` and all resources are defined in `azure-resources.json`.

## How to deploy

1. First import `azure-resources.json` into the templates section of the Azure console (https://portal.azure.com/#blade/HubsExtension/Resources/resourceType/Microsoft.Gallery%2Fmyareas%2Fgalleryitems)
2. Deploy that template and note down the connection strings to the Cosmos DB and the Queues
3. Fill out the connection requirements in the `serverless.yml` file (https://serverless.com/framework/docs/providers/azure/events/)
4. Run `npm run deploy`
