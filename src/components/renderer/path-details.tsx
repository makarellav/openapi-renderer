import { HTTPMethod, OpenAPIDefinition } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { MethodDetails } from "./method-details";
import { MethodBadge } from "../ui/method-badge";

export function PathDetails({ document }: { document: OpenAPIDefinition }) {
  return (
    <Accordion type="single" collapsible className="mt-6 space-y-2">
      {Object.entries(document.paths).map(([path, methods]) => (
        <div key={path}>
          <h2 className="text-lg font-semibold">{path}</h2>
          <Accordion type="single" collapsible className="mt-2 space-y-2">
            {Object.entries(methods).map(
              ([method, entry]) =>
                entry && (
                  <AccordionItem key={method} value={method}>
                    <AccordionTrigger>
                      <MethodBadge type={method as HTTPMethod} />
                    </AccordionTrigger>
                    <AccordionContent>
                      <MethodDetails
                        method={method as HTTPMethod}
                        entry={entry}
                        document={document}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ),
            )}
          </Accordion>
        </div>
      ))}
    </Accordion>
  );
}
