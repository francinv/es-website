import { client } from "@app/config";
import { ProgramStructurePage } from "@app/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  H2,
  SanityBlock,
  Title,
} from "@app/components";
import Link from "next/link";

async function getData() {
  const query = `*[ _type == 'programStructure' ]`;
  return client.fetch<ProgramStructurePage[]>(query).then((res) => res[0]);
}

export default async function Program() {
  const content = await getData();

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-col items-center justify-center md:flex-row px-8 md:pt-2">
        <SanityBlock blocks={content.content} />
        <div className="px-6 py-4 bg-tertiary rounded-xl my-4 text-tertiary-foreground w-11/12 md:w-9/12">
          <H2 className="text-center">Our values</H2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Interdisciplinarity</li>
            <li>Honest and clear feedback</li>
            <li>Transparency and sharing of knowledge</li>
            <li>Celebration of successes</li>
            <li>Encouragement of difficulties</li>
            <li>Personal development through accountability</li>
            <li>
              Learning in combination of high theoretical standards and
              practices
            </li>
            <li>
              Project that fails is a good fundament to start a new one, with
              new knowledge
            </li>
          </ul>
        </div>
      </section>
      <section className="my-4 md:flex flex-col items-center hidden">
        <div className="w-full md:w-4/5 text-center text-accent">
          <Title>{`"${content.quote.quote}"`}</Title>
          <H2 className="mt-2 text-accent">{content.quote.author}</H2>
        </div>
      </section>
      <section className="my-4 flex flex-col items-center">
        <Accordion type="single" collapsible className="w-11/12 md:w-4/5">
          {content.semesters.map((semester) => (
            <AccordionItem value={semester.title} key={semester.title}>
              <AccordionTrigger>{semester.title}</AccordionTrigger>
              <AccordionContent>
                <div className="flex justify-start items-center flex-wrap">
                  {semester.courses.map((course) => (
                    <Button
                      asChild
                      key={course.title}
                      className="md:mx-2 ml-1 my-1"
                      size="sm"
                      variant={course.url ? "default" : "ghost"}
                      disabled={!course.url}
                    >
                      <Link
                        href={course.url ?? ""}
                        target={course.url ? "_blank" : "_self"}
                      >
                        {course.title}
                      </Link>
                    </Button>
                  ))}
                </div>
                <SanityBlock blocks={semester.description} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
