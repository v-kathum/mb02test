# Minut API and frontend

This is a serverless project. All functions are defined in `serverless.yml` and all resources are defined in `azure-resources.json`.

## How to deploy

1. First import `azure-resources.json` into the templates section of the Azure console (https://portal.azure.com/#blade/HubsExtension/Resources/resourceType/Microsoft.Gallery%2Fmyareas%2Fgalleryitems)
2. Deploy that template and note down the connection strings to the Cosmos DB and the Queues
3. Fill out the connection requirements in the `serverless.yml` file (https://serverless.com/framework/docs/providers/azure/events/)
4. Enable extensions by setting the `FUNCTIONS_EXTENSION_VERSION` to 2.0.11961-alpha
5. Run `npm run deploy`


## There's binding errors

Follow: https://github.com/Azure/azure-functions-host/wiki/Updating-your-function-app-extensions#updating-function-app-targeting-javascript
