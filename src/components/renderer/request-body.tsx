import { OpenAPIDefinition, RequestBody, SchemaComponent } from "@/types";
import { derefComponent } from "@/utils";

interface RequestBodyDisplayProps {
  requestBody: RequestBody;
  document: OpenAPIDefinition;
}

export function RequestBodyDisplay({
  requestBody,
  document,
}: RequestBodyDisplayProps) {
  return (
    <div className="space-y-4 mt-2">
      {Object.entries(requestBody.content).map(([contentType, content]) => {
        const schema = derefComponent<SchemaComponent>(
          content.schema.$ref,
          document.components,
          "schemas",
        );
        const properties = Object.fromEntries(
          Object.entries(schema.properties).map(([k, v]) => [
            k,
            derefComponent<SchemaComponent>(
              v.$ref,
              document.components,
              "schemas",
            ),
          ]),
        );
        return (
          <div key={contentType} className="border p-2 rounded-md">
            <strong>Body {contentType}</strong>
            {Object.entries(properties).map(([name, subSchema]) => (
              <div key={name}>
                <p>
                  {name} - {subSchema.type}
                </p>
                <p>{subSchema.description && ` - ${subSchema.description}`}</p>
                <p>{subSchema.example && ` - Example: ${subSchema.example}`}</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
