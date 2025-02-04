import { Responses } from "@/types";

interface ResponsesProps {
  responses: Responses;
}

export function ResponsesList({ responses }: ResponsesProps) {
  return (
    <ul className="list-disc list-inside pl-4 space-y-1">
      {Object.entries(responses).map(([code, response]) => (
        <li key={code}>
          {code}: {response.description}
        </li>
      ))}
    </ul>
  );
}
