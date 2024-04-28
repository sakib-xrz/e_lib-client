import Image from "next/image";
import author from "../../../../public/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg";

const AuthorCard = () => {
  return (
    <div className="border-2 border-border space-y-3 p-4 rounded-xl">
      <h1>Author</h1>
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
      <h1>Related Tags on E Lib</h1>
    </div>
  );
};

export default AuthorCard;
