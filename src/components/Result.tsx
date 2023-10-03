const Result = (props: {
  amountPerPerson: number;
  totalPerPerson: number;
  calculate: Function;
  billValue: number;
  percentage: number;
  people: number;
}) => {
  return (
    <div className="bg-very-dark-cyan flex flex-col mt-8 justify-between p-6 rounded-2xl gap-5 md:mt-0 md:h-full md:p-10 ">
      <div>
        <div className="flex justify-between mb-16">
          <div>
            <h2 className="text-white">Tip Amount</h2>
            <p className="text-grayish-cyan">/ person</p>
          </div>
          <div className="text-strong-cyan rounded-md text-4xl">
            <p>${props.amountPerPerson}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-white">Total</h2>
            <p className="text-grayish-cyan">/ person</p>
          </div>
          <div className="text-strong-cyan rounded-md text-4xl">
            <p>${props.totalPerPerson}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          className="w-full bg-strong-cyan text-very-dark-cyan rounded-md py-3 hover:bg-strong-cyan-hover"
          onClick={() =>
            props.calculate(props.billValue, props.percentage, props.people)
          }
        >
          CALCULATE
        </button>
      </div>
    </div>
  );
};

export default Result;
