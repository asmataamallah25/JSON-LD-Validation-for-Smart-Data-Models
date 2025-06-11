//import json-schema-ref-parser as $RefParser
const $RefParser = require("json-schema-ref-parser"); 
// import the file system module
const fs = require("fs"); 

(async () => {
  try {
    // Load your schema
    const schema = await $RefParser.bundle("schema.json");
    // Save the bundled schema
    fs.writeFileSync("bundled.json", JSON.stringify(schema, null, 2));
    console.log("✅ Bundled schema saved to bundled.json");
  } catch (err) {
    console.error("❌ Bundling failed:", err);
  }
})();
