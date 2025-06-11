const Ajv2020 = require("ajv/dist/2020"); // Use the 2020 export
const addFormats = require("ajv-formats");
const fs = require("fs");

const schema = JSON.parse(fs.readFileSync("bundled.json", "utf8"));
const data = JSON.parse(fs.readFileSync("NL_P.jsonld", "utf8"));

const ajv = new Ajv2020({ strict: false }); // Initialize Ajv 2020
addFormats(ajv); // Add format validation (uri, email, date-time, etc.)

const validate = ajv.compile(schema);
const isValid = validate(data);

if (isValid) {
  console.log("✅ Data is valid!");
} else {
  console.log("❌ Validation errors:", validate.errors);
}
