import { client, urlForImage } from "@app/config";
import { ContactPerson } from "@app/types";
import { sortAscending } from "@app/util/sort";
import { ContactCard, Title } from "@app/components";

async function getData() {
  const query = `*[_type == "contact"]`;
  return client.fetch<ContactPerson[]>(query);
}

export default async function Contact() {
  const content = sortAscending(await getData());

  return (
    <main className="flex min-h-screen flex-col w-4/5 mx-auto my-8">
      <Title className="text-secondary">Get in contact</Title>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {content.map((person) => {
          return (
            <ContactCard
              key={person._id}
              imageUri={urlForImage(person.image)}
              name={person.name}
              position={person.position}
              email={person.email}
              phone={person.phone}
            />
          );
        })}
      </div>
    </main>
  );
}
