import { client } from "../../sanity/lib/client";
import { HomePage } from "@app/types";
import { Title } from "@app/components";

async function getData() {
  const query = '*[_type == "home"]';
  return client.fetch<HomePage[]>(query).then((res: HomePage[]) => {
    console.log("res", res);
    return res[0];
  });
}

export default async function Home() {
  const content = await getData();
  console.log("content", content);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/*<Image src={urlForImage(content.image)} alt={"Some picture"} />*/}

      <Title className={"text-secondary"}>{content.title}</Title>
      <video controls className="w-3/5">
        <source src={content.video} type="video/mp4" />
      </video>
    </main>
  );
}
