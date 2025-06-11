# JSON-LD-Validation-for-Smart-Data-Models
This repository demonstrates how to validate JSON-LD data for Smart Data Models from the DCAT-AP catalog.  

## Features
**Schema Bundling:**
Resolves all external references in the schema using json-schema-ref-parser.

**Validation:**
Uses Ajv (JSON Schema Validator) to check JSON-LD files against the bundled schema.

**Error Handling:**
Provides clear error messages and guidance for fixing structural mismatches.

## Prerequisites
- Node.js (v18+ recommended)
- npm
- json-schema-ref-parser (for bundling)
- ajv and ajv-formats (for validation)

## Workflow
1. Bundle the JSON Schema.
2. Validate JSON-LD Files against the bundled Json schema.

## Fixing Common Validation Errors (Examples)

### Problem: GeoJSON Structure
**Invalid:**

```json
"operationSpace": {
  "type": "GeoProperty",
  "value": { "type": "Point", "coordinates": [5.265056, 52.750306] }
}
```

**Valid:**

```json
"operationSpace": {
  "type": "Point",
  "coordinates": [5.265056, 52.750306]
}
```

## Problem: NGSI-LD vs. Schema Structure

**Invalid:**

```json
"license": {
  "type": "Property",
  "value": "Apache-2.0"
}
```

**Valid:**

```json
"license": "Apache-2.0"
```
## Additional tools
In addition to local validation with Node.js and Ajv, the online tool [JSON Schema Validator]( https://www.jsonschemavalidator.net/) by Newtonsoft was used to verify the validition of the JSON-LD files against the bundled JSON Schema.


