import { OpenAPIDefinition, Param } from "@/types";
import { derefComponent } from "@/utils";

interface ParametersDisplayProps {
  parameters: Param[];
  document: OpenAPIDefinition;
}

export function ParametersDisplay({
  parameters,
  document,
}: ParametersDisplayProps) {
  return (
    <div className="space-y-4 mt-2">
      {parameters.map((param, i) => {
        const actualParam = param.$ref
          ? derefComponent<Param>(param.$ref, document.components, "parameters")
          : param;

        return (
          <div key={i} className="border p-2 rounded-md">
            <strong>{actualParam.name}</strong>
            <div>{actualParam.description}</div>
            <div>Type: {actualParam.schema.type}</div>
          </div>
        );
      })}
    </div>
  );
}
