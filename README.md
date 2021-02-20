# epin-api
This is a REST API to retrieve information from the EPIN REST service. The EPIN REST service is provided by the "Bavarian State Office for Health and Food Safety". This service can be used to retrieve pollen readings from different measurement locations within Germany. For more information you can visit https://epin.lgl.bayern.de/schnittstelle.


## Build Setup

Normally you will use this project as a dependency in your Nuxt.js, Vue.js project, to query the EPIN REST service. And the REST API will be automatically be generated from the openapi.yaml file which specifies some parts of the EPIN REST service.

I you want to build it manually you can checkout the repository. After you execute npm install, the prepare script will run automatically to generate a REST API client using axios and typescript.

```bash
# install dependencies
$ npm install
```
