import { useState, ChangeEvent, FormEvent } from "react";

export default function TipCalculator() {
  const [billValue, setBillValue] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [amountPerPerson, setAmountPerPerson] = useState<number>(0);
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0);

  const handleReset = () => {
    setBillValue(0);
    setPeople(0);
    setAmountPerPerson(0);
    setTotalPerPerson(0);
    setPercentage(0);
    uncheckRadioButtons();
  };

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
        ? amountPerPerson
        : 0
    );
    setTotalPerPerson(
      !isNaN(totalPerPerson) && totalPerPerson !== Infinity 
        ? totalPerPerson 
        : 0
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
          <form className="flex flex-col">
            <label htmlFor="bill" className="text-dark-grayish-cyan">
              Bill
            </label>
            <input
              type="number"
              id="bill"
              name="bill"
              min="1"
              value={billValue}
              className="text-right text-very-dark-cyan bg-very-lightgrayish-cyan h-12 rounded-md outline-strong-cyan px-5 mt-2"
              onChange={(e) => setBillValue(parseInt(e.target.value))}
            />
          </form>
          <form>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <h2 className="col-start-1 col-end-3 md:col-start-1 md:col-end-4 md:text-left text-dark-grayish-cyan">
                Select Tip %
              </h2>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  className="peer sr-only"
                  name="percentage"
                  value="5"
                  onChange={(e) => handleChecked(e)}
                />
                <div className="w-full rounded-md bg-very-dark-cyan p-2 text-white transition-all peer-checked:bg-strong-cyan">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-center">
                      <p className="text-2xl font-semibold uppercase text-white text-center">
                        5%
                      </p>
                    </div>
                  </div>
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  className="peer sr-only"
                  name="percentage"
                  value="10"
                  onChange={(e) => handleChecked(e)}
                />
                <div className="w-full rounded-md bg-very-dark-cyan p-2 text-white transition-all peer-checked:bg-strong-cyan">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-center">
                      <p className="text-2xl font-semibold uppercase text-white text-center">
                        10%
                      </p>
                    </div>
                  </div>
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  className="peer sr-only"
                  name="percentage"
                  value="15"
                  onChange={(e) => handleChecked(e)}
                />
                <div className="w-full rounded-md bg-very-dark-cyan p-2 text-white transition-all peer-checked:bg-strong-cyan">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-center">
                      <p className="text-2xl font-semibold uppercase text-white text-center">
                        15%
                      </p>
                    </div>
                  </div>
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  className="peer sr-only"
                  name="percentage"
                  value="25"
                  onChange={(e) => handleChecked(e)}
                />
                <div className="w-full rounded-md bg-very-dark-cyan p-2 text-white transition-all peer-checked:bg-strong-cyan">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-center">
                      <p className="text-2xl font-semibold uppercase text-white text-center">
                        25%
                      </p>
                    </div>
                  </div>
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  className="peer sr-only"
                  name="percentage"
                  value="50"
                  onChange={(e) => handleChecked(e)}
                />
                <div className="w-full rounded-md bg-very-dark-cyan p-2 text-white transition-all peer-checked:bg-strong-cyan">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-center">
                      <p className="text-2xl font-semibold uppercase text-white text-center">
                        50%
                      </p>
                    </div>
                  </div>
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  id="custom-percentage"
                  type="number"
                  placeholder="CUSTOM"
                  className="text-right text-2xl w-full h-12 rounded-md bg-light-grayish-cyan p-3 text-very-dark-cyan transition-all placeholder:text-center placeholder:text-grayish-cyan focus:outline-strong-cyan"
                  onChange={(e) => handleChecked(e)}
                  //uncheck other percentage values when custom percentage input is on focus
                  onFocus={() => uncheckRadioButtons()}
                  //clear the custom percentage input if user chooses another percentage value
                  onBlur={(e) => (e.target.value = "")}
                />
              </label>
            </div>
          </form>
          <div className="mt-8">
            <form>
              <label htmlFor="people" className="text-dark-grayish-cyan">
                Number of People
              </label>
              <span className="text-red-400 ms-6 invisible">Can't be zero</span>
              <input
                type="number"
                name="people"
                id="people"
                min="1"
                value={people}
                className="text-right text-very-dark-cyan bg-very-lightgrayish-cyan h-12 rounded-md outline-strong-cyan px-5 mt-2 w-full"
                onChange={(e) => setPeople(parseInt(e.target.value))}
              />
            </form>
          </div>
        </div>
        <div className="bg-very-dark-cyan flex flex-col mt-8 justify-between p-6 rounded-2xl gap-5 md:mt-0 md:h-full md:p-10 ">
          <div>
            <div className="flex justify-between mb-16">
              <div>
                <h2 className="text-white">Tip Amount</h2>
                <p className="text-grayish-cyan">/ person</p>
              </div>
              <div className="text-strong-cyan rounded-md text-4xl">
                <p>${amountPerPerson}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="text-white">Total</h2>
                <p className="text-grayish-cyan">/ person</p>
              </div>
              <div className="text-strong-cyan rounded-md text-4xl">
                <p>${totalPerPerson}</p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="w-full bg-strong-cyan text-very-dark-cyan rounded-md py-3 hover:bg-strong-cyan-hover"
              onClick={() => calculate(billValue, percentage, people)}
            >
              CALCULATE
            </button>
          </div>
          {/* <div>
            <button
              className="w-full bg-strong-cyan text-very-dark-cyan rounded-md py-3 hover:bg-strong-cyan-hover"
              onClick={handleReset}
            >
              RESET
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
