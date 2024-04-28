import Image from "next/image";
import image from "../../../../public/images/joshua-hanson-e616t35Vbeg-unsplash.jpg";
import author from "../../../../public/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const Card = () => {
  return (
    <Link
      href={`/blog/1`}
      className="block border-2 border-border max-w-sm rounded-xl m-12 p-4 space-y-3 cursor-pointer hover:bg-secondary/60"
    >
      <div>
        <Image
          className="w-96 h-64 rounded-xl"
          src={image}
          alt="photographer"
          height={500}
          width={500}
        />
      </div>

      <div>
        <Badge className={"bg-green-500"}>Tech</Badge>
      </div>

      <div>
        <p className="text-xl font-extrabold leading-6 ">
          Give a shoutout to Joshua Hanson on social or copy the text below to
          attribute.
        </p>
      </div>

      <div className="border-l-4 border-black">
        <p className="text-sm line-clamp-2 pl-2">
          Photography is the art, application, and practice of creating images
          by recording light, either electronically by means of an image sensor,
          or chemically by means of a light-sensitive material such as
          photographic film.
        </p>
      </div>

      <div className="flex items-center gap-2 pt-2">
        <div>
          <Image
            className="w-12 h-12 rounded-xl"
            src={author}
            alt="author"
            height={500}
            width={500}
          />
        </div>
        <div>
          <h1 className="text-sm font-bold">Alexia Georgia</h1>
          <p className="text-xs ">July 21, 2023</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
