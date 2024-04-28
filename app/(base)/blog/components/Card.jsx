import Image from "next/image";
import blog from "@/public/images/blog-img.jpeg";
import author from "@/public/images/author.jpg";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const Card = () => {
  return (
    <Link
      href={`/blog/1`}
      className="block border-2 border-border max-w-sm rounded-xl p-4 space-y-3 cursor-pointer hover:bg-secondary/60"
    >
      <div>
        <Image
          className="rounded-xl aspect-video"
          src={blog}
          alt="photographer"
        />
      </div>

      <div>
        <Badge>Tech</Badge>
      </div>

      <div>
        <p className="text-xl font-extrabold leading-6 ">
          Give a shoutout to Joshua Hanson on social or copy the text below to
          attribute.
        </p>
      </div>

      <div className="border-l-4 border-border">
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
            className="w-12 h-12 rounded-xl object-cover object-top"
            src={author}
            alt="author"
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
