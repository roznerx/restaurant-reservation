import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";
import Persons from "./components/Persons";
import RezDate from "./components/RezDate";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [people, setPeople] = useState<number>(2);
  const [peopleOpen, setPeopleOpen] = useState<boolean>(false);
  const [rezDate, setRezDate] = useState<Date | null>(new Date());
  const [rezDateOpen, setRezDateOpen] = useState<boolean>(false);

  return (
    <div 
      className="p-8 text-center inline-flex justify-center" onClick={() => setIsOpen(true)}>
      <Button 
        className={
          clsx(
          "inline-flex items-center gap-2 rounded-md",
          "bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold",
          "text-white shadow-inner shadow-white/10",
          "focus:not-data-focus:outline-none cursor-pointer",
          "data-focus:outline data-focus:outline-white",
          "data-hover:bg-gray-600 data-open:bg-gray-700"
          )
        }
      >
        Book a table
      </Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg w-lg space-y-4 border bg-white p-20">
            <DialogTitle className="font-bold">Book a table</DialogTitle>
            <Persons 
              people={people} setPeople={setPeople} 
              peopleOpen={peopleOpen} setPeopleOpen={setPeopleOpen} 
            />
            <RezDate 
              rezDate={rezDate} setRezDate={setRezDate}
              rezDateOpen={rezDateOpen} setRezDateOpen={setRezDateOpen}
            />  
            <div></div>
            <div></div>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

