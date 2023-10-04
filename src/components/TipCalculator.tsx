import { useState, ChangeEvent } from "react";
import PercentageForm from "./PercentageForm";
import BillForm from "./BillForm";
import PeopleForm from "./PeopleForm";
import Result from "./Result";

export default function TipCalculator() {
  const [billValue, setBillValue] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [amountPerPerson, setAmountPerPerson] = useState<string>(0.00.toFixed(2));
  const [totalPerPerson, setTotalPerPerson] = useState<string>(0.00.toFixed(2));

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setPercentage(parseInt(e.currentTarget.value));
  };

  const calculate = (
    bill: number,
    tipPercentage: number,
    numberOfPeople: number
  ) => {
    const tip = bill * (tipPercentage / 100);
    const amountPerPerson = tip / numberOfPeople;
    const totalPerPerson = (bill + tip) / numberOfPeople;
    setAmountPerPerson(
      !isNaN(amountPerPerson) && amountPerPerson !== Infinity
        ? amountPerPerson.toFixed(2)
        : 0.00.toFixed(2)
    );
    setTotalPerPerson(
      !isNaN(totalPerPerson) && totalPerPerson !== Infinity 
        ? totalPerPerson.toFixed(2)
        : 0.00.toFixed(2)
    );
  };

  const uncheckRadioButtons = () => {
    //Type HTMLInputElement was used in this code to avoid errors on element.checked
    document
      .querySelectorAll<HTMLInputElement>("input[name=percentage]")
      .forEach((element) => (element.checked = false));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-logo bg-no-repeat w-logo h-logo"></div>
      <div className="bg-white w-mobile mt-10 rounded-xl py-10 px-8 md:w-desktop md:grid md:grid-cols-2 md:gap-x-12">
        <div>
          <BillForm setBillValue={setBillValue} />
          <PercentageForm
            handleChecked={handleChecked}
            uncheckRadioButtons={uncheckRadioButtons}
          />
          <div className="mt-8">
            <PeopleForm setPeople={setPeople} />
          </div>
        </div>
        <Result
          amountPerPerson={amountPerPerson}
          totalPerPerson={totalPerPerson}
          calculate={calculate}
          billValue={billValue}
          percentage={percentage}
          people={people}
        />
      </div>
    </div>
  );
}
