const PercentageForm = (props: {
  handleChecked: Function;
  uncheckRadioButtons: Function;
}) => {
  return (
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
            onChange={(e) => props.handleChecked(e)}
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
            onChange={(e) => props.handleChecked(e)}
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
            onChange={(e) => props.handleChecked(e)}
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
            onChange={(e) => props.handleChecked(e)}
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
            onChange={(e) => props.handleChecked(e)}
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
            onChange={(e) => props.handleChecked(e)}
            //uncheck other percentage values when custom percentage input is on focus
            onFocus={() => props.uncheckRadioButtons()}
            //clear the custom percentage input if user chooses another percentage value
            onBlur={(e) => (e.target.value = "")}
          />
        </label>
      </div>
    </form>
  );
};

export default PercentageForm;
