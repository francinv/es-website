import { client } from "@app/config";
import { CernAndBostonPage } from "@app/types";
import { CernSection, BostonSection } from "@app/sections";

async function getData() {
  const query = `*[ _type == 'cernAndBoston' ]`;
  return client.fetch<CernAndBostonPage[]>(query).then((res) => res[0]);
}

export default async function CERNAndBoston() {
  const content = await getData();

  return (
    <main className="flex min-h-screen flex-col">
      <section className="my-4 flex flex-col items-center">
        <video controls className="w-11/12 md:w-4/5">
          <source src={content.video} type="video/mp4" />
        </video>
      </section>
      <section className="my-4 flex flex-row justify-between items-center"></section>
      <CernSection blocks={content.cernContent} image={content.cernImage} />
      <BostonSection
        blocks={content.bostonContent}
        image={content.bostonImage}
      />
    </main>
  );
}
