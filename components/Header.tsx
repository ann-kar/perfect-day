import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/outline";

export const Header = () => {
  const today = new Date();

  return (
    <header className="p-2 h-full text-black  flex justify-between items-center">
      <div>
        <UserCircleIcon className="h-7 w-7 text-amber-400" />
      </div>
      <div className="flex items-center">
        <button>
          <ArrowNarrowLeftIcon className="h-6 w-6 mx-3" />
        </button>
        <div className="text-2xl">
          {today.getDate()}
        </div>
        <button>
          <ArrowNarrowRightIcon className="h-6 w-6 mx-3" />
        </button>
      </div>

      <button>
        <MenuIcon className="h-7 w-7" />
      </button>
    </header>
  );
};
