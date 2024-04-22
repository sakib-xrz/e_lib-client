import Image from "next/image";

import { useStore } from "@/context/StoreProvider";

export default function UserCard() {
  const { user } = useStore();
  return (
    <div className="flex items-center gap-2 rounded-md border border-border p-2">
      <Image
        src={user?.profile_picture}
        alt="user-profile"
        width={100}
        height={100}
        priority
        className="border-primary-600 h-8 w-8 rounded-full border-2 object-cover"
      />
      <div className="pr-2">
        <p className="text-start text-xs font-semibold text-gray-700">
          {user?.name}
        </p>
        <p className="text-start text-xs font-medium text-gray-500">
          {user?.email}
        </p>
      </div>
    </div>
  );
}
