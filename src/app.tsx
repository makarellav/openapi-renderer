import React, { useState } from "react";
import { parse } from "yaml";

import { OpenAPIDefinition } from "./types";

import { PathDetails } from "./components/renderer/path-details";

export function App() {
  const [specification, setSpecification] = useState("");
  const [document, setDocument] = useState<OpenAPIDefinition | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const schema = parse(specification) as OpenAPIDefinition;
    setDocument(schema);
  }

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <textarea
          className="border rounded p-2"
          rows={20}
          value={specification}
          onChange={(e) => setSpecification(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Render
        </button>
      </form>
      {document && <PathDetails document={document} />}
    </div>
  );
}
