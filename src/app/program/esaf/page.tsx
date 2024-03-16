import { client } from "@app/config";
import { AlumniOrganizationPage } from "@app/types";
import { AlumniSection } from "@app/sections";

async function getData() {
  const query = `*[ _type == "alumni" ]`;
  return client.fetch<AlumniOrganizationPage[]>(query).then((res) => res[0]);
}

export default async function AlumniOrganization() {
  const content = await getData();

  return (
    <main className="flex min-h-screen flex-col">
      <section className="my-4 flex flex-col items-center">
        <video controls className="w-11/12 md:w-4/5">
          <source src={content.video} type="video/mp4" />
        </video>
      </section>
      <AlumniSection image={content.image} blocks={content.content} />
    </main>
  );
}
