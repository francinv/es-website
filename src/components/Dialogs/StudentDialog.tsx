import { Student } from "@app/types";
import { useMediaQuery } from "@app/hooks";
import Image from "next/image";
import { urlForImage } from "@app/config";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  H6,
} from "@app/components";
import Link from "next/link";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { ScrollArea } from "@app/components/Dialogs/ScrollArea";

interface StudentDialogProps {
  student: Student;
}

const getFirstName = (name: string) => {
  return name.split(" ")[0];
};

const StartupCard = (student: Student) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const height = isMobile ? 125 : 300;

  return (
    <>
      <Image
        src={urlForImage(student.image)}
        alt={student.name}
        width={isMobile ? 175 : 250}
        height={295}
        className={`rounded-t-2xl h-[${height}px]`}
      />
      <H6 className="font-medium group-hover:bg-accent group-hover:text-background text-center duration-300 w-full">
        {getFirstName(student.name)}
      </H6>
    </>
  );
};

const StudentDialog = ({ student }: StudentDialogProps) => {
  const noDescription =
    student.description === null || student.description === undefined;

  if (noDescription) {
    return (
      <div className="flex flex-col items-center group">
        <StartupCard {...student} />
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger className="flex flex-col items-center group">
        <>
          <StartupCard {...student} />
        </>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-row justify-start items-center">
          <Image
            src={urlForImage(student.image)}
            alt={student.name}
            width={50}
            height={100}
            className="rounded-md"
          />
          <div className="flex items-center">
            <DialogTitle className="text-black ml-4">
              {student.name}
            </DialogTitle>
            {student.linkedin && (
              <Button
                variant="transparent"
                size="icon"
                className="mx-2 text-black"
                asChild
              >
                <Link href={student.linkedin}>
                  <IconBrandLinkedin stroke={1.5} size={50} />
                </Link>
              </Button>
            )}
          </div>
        </DialogHeader>
        <div className="text-black flex flex-col justify-center">
          <ScrollArea className="max-h-[200px] md:max-h-[600px]">
            <p>{student.description}</p>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { StudentDialog };