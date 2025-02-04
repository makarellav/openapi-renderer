import { Components } from "./types";

export function derefComponent<T>(
  path: string,
  components: Components,
  key: keyof Components,
): T {
  const parts = path.slice(2).split("/");
  return components[key][parts[2]] as T;
}
