export type HTTPMethod =
  | "get"
  | "post"
  | "put"
  | "delete"
  | "patch"
  | "options"
  | "head"
  | "trace";

export interface Response {
  description: string;
}

export interface RequestBody {
  required: boolean;
  content: {
    [key: string]: {
      schema: { $ref: string };
    };
  };
}

export interface Responses {
  [key: string]: Response;
}

export interface Param {
  $ref?: string;
  name: string;
  description: string;
  schema: { type: string; format: string; example: string };
}

export interface Entry {
  summary: string;
  description: string;
  responses: Responses;
  parameters?: Param[];
  requestBody?: RequestBody;
}

export type HTTPMethods = {
  [K in HTTPMethod]?: Entry;
};

export interface Paths {
  [key: string]: HTTPMethods;
}

export interface Property {
  $ref: string;
}

export interface SchemaComponent {
  description: string;
  properties: Record<string, Property>;
  required: string[];
  example: string;
  type: string;
}

export interface Components {
  schemas: Record<string, SchemaComponent>;
  parameters: Record<string, Param>;
}

export interface OpenAPIDefinition {
  paths: Paths;
  components: Components;
}
