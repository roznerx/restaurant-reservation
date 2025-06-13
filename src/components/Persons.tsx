import { Dialog, DialogPanel } from "@headlessui/react";
import type { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

interface Persons {
  peopleOpen: boolean;
  setPeopleOpen: Dispatch<SetStateAction<boolean>>
  people: number;
  setPeople: Dispatch<SetStateAction<number>>
};

export default function Persons({ peopleOpen, setPeopleOpen, people, setPeople }: Persons ) {
  return (
    <div className="p-4 bg-sky-200 inline-flex w-full gap-8 justify-between">
      <h3 className="italic">People</h3>
      <button className="font-semibold cursor-pointer" onClick={() => setPeopleOpen(true)}> 
        {people} {people === 1 ? 'person' : 'persons'}
      </button>
      <Dialog 
        open={peopleOpen} 
        onClose={() => setPeopleOpen(false)} 
        className="relative z-50" 
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-md w-md space-y-4 border bg-sky-100 p-8">
            <div className="grid grid-flow-col grid-rows-2 grid-cols-5 gap-4">
              {
                [...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className={
                      clsx(
                        "bg-white hover:border-sky-500 hover:text-sky-500 border",
                        "inline-flex justify-center align-center p-4 cursor-pointer"
                      )
                    }
                    onClick={() => {
                      setPeople(index + 1);
                      setPeopleOpen(false);
                    }}
                  >
                    {index + 1}
                  </div>
                ))
              }
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};
