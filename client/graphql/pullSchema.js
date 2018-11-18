const fs = require("fs");
const request = require("request");

const SCHEMA_FILE = "./graphql/schema.graphql";
const SCHEMA_FETCH_URL = "http://localhost:3002/graphql/schema";

const reportError = error => {
  console.error("Error encountered while fetching schema: ", error);
  process.exit(1);
};

const writeSchemaFileIfChanged = (schemaFile, schemaString) => {
  const currentSchema =
    fs.existsSync(schemaFile) && fs.readFileSync(schemaFile).toString();

  if (currentSchema === schemaString) {
    console.log(`Current and fetched GraphQL schemas match: ${schemaFile}`);
  } else {
    fs.writeFile(schemaFile, schemaString, error => {
      if (error) {
        reportError(error);
      } else {
        console.log(`Updated schema written to '${schemaFile}'`);
      }
    });
  }
};

request({ url: SCHEMA_FETCH_URL }, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    reportError(error || response.body);
  } else {
    writeSchemaFileIfChanged(SCHEMA_FILE, body);
  }
});
