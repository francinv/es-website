import { FacultyMember } from "@app/types";
import { urlForImage } from "@app/config";
import Image from "next/image";
import { H3, SanityBlock } from "@app/components";
import { Avatar, AvatarImage } from "@app/components/Avatar";

interface FacultyCardProps {
  person: FacultyMember;
}

const FacultyCard = ({ person }: FacultyCardProps) => {
  const { name, bio, title, image } = person;

  return (
    <div className="rounded-lg relative bg-card pl-2 p-4 md:p-8 my-6">
      <div className="flex flex-row items-start justify-start">
        <Image
          width={150}
          height={150}
          src={urlForImage(image)}
          alt={`Picture of: ${name}`}
          className="my-auto hidden md:block"
        />
        <div className="flex flex-col items-start justify-center ml-6">
          <div className="flex items-center justify-between mt-2 md:mt-0 w-full">
            <div>
              <H3>{name}</H3>
              <p className="font-bold">{title}</p>
            </div>
            <Avatar
              className="block md:hidden"
              style={{ width: 75, height: 75 }}
            >
              <AvatarImage
                src={urlForImage(image)}
                alt={`Picture of: ${name}`}
              />
            </Avatar>
          </div>
          <div className="mt-4 md:mt-0">
            <SanityBlock
              blocks={bio}
              customComponents={{
                block: {
                  normal: (props: any) => (
                    <p className="text-black mt-2 text-sm">{props.children}</p>
                  ),
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { FacultyCard };
