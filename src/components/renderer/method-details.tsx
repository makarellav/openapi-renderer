import { HTTPMethod, HTTPMethods, OpenAPIDefinition } from "@/types";
import { ResponsesList } from "./response-list";
import { RequestBodyDisplay } from "./request-body";
import { ParametersDisplay } from "./parameters";

interface MethodDetailsProps {
  method: HTTPMethod;
  entry: Exclude<HTTPMethods[HTTPMethod], undefined>;
  document: OpenAPIDefinition;
}

export function MethodDetails({ method, entry, document }: MethodDetailsProps) {
  return (
    <div className="mt-4 p-4 border rounded-md space-y-2">
      <strong>{method.toUpperCase()}</strong>
      <p>Summary: {entry.summary}</p>
      <p>Description: {entry.description}</p>
      <p>Responses:</p>
      <ResponsesList responses={entry.responses} />
      {entry.requestBody && (
        <RequestBodyDisplay
          requestBody={entry.requestBody}
          document={document}
        />
      )}
      {entry.parameters && (
        <ParametersDisplay parameters={entry.parameters} document={document} />
      )}
    </div>
  );
}
