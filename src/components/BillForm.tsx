const BillForm = (props: { billValue: number; setBillValue: Function }) => {
  return (
    <form className="flex flex-col">
      <label htmlFor="bill" className="text-dark-grayish-cyan">
        Bill
      </label>
      <input
        type="number"
        id="bill"
        name="bill"
        min="1"
        value={props.billValue}
        className="text-right text-very-dark-cyan bg-very-lightgrayish-cyan h-12 rounded-md outline-strong-cyan px-5 mt-2"
        onChange={(e) => props.setBillValue(parseInt(e.target.value))}
      />
    </form>
  );
};

export default BillForm;
