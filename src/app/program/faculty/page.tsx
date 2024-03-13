import { client } from "@app/config";
import { sortAscending } from "@app/util";
import { FacultyCard } from "@app/components";
import { FacultyMember } from "@app/types";

async function getData() {
  const query = `*[ _type == 'facultyMembers' ]`;
  return client.fetch(query);
}

export default async function Faculty() {
  const data = sortAscending<FacultyMember>(await getData());

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-11/12 md:w-4/5">
        {data.map((member) => (
          <FacultyCard person={member} key={member.name} />
        ))}
      </section>
    </main>
  );
}
