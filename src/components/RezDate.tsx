import type { Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";

interface RezDate {
  rezDateOpen: boolean;
  setRezDateOpen: Dispatch<SetStateAction<boolean>>;
  rezDate: Date | null;
  setRezDate: Dispatch<SetStateAction<Date | null>>;
};

export default function RezDate({ rezDateOpen, setRezDateOpen, rezDate, setRezDate }: RezDate) {
  return (
    <div className="p-4 bg-sky-200 inline-flex w-full gap-8 justify-between">
      <h3 className="italic">Date</h3>
      {/*<button className="font-semibold cursor-pointer" onClick={() => setPeopleOpen(true)}> 
        {rezDate}
      </button>*/}
      <DatePicker
        selected={rezDate}
        onChange={(date) => setRezDate(date)}
        customInput={
          <button className="font-semibold cursor-pointer">
            {rezDate ? rezDate.toLocaleDateString() : "Pick a date"}
          </button>
        }
        popperPlacement="bottom-start"
      />
    </div>
  );
};
