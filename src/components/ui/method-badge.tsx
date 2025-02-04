import { HTTPMethod } from "@/types";

const methodVariants: Record<HTTPMethod, string> = {
  get: "bg-green-500",
  post: "bg-blue-500",
  put: "bg-yellow-500",
  delete: "bg-red-500",
  patch: "bg-purple-500",
  options: "bg-gray-500",
  head: "bg-pink-500",
  trace: "bg-indigo-500",
};

export function MethodBadge({ type }: { type: HTTPMethod }) {
  return (
    <span className={`px-2 py-1 text-white rounded ${methodVariants[type]}`}>
      {type.toUpperCase()}
    </span>
  );
}
