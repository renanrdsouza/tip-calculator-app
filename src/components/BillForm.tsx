const BillForm = (props: { setBillValue: Function }) => {
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
        placeholder="0"
        className="text-right text-very-dark-cyan bg-very-lightgrayish-cyan h-12 rounded-md outline-strong-cyan px-5 mt-2 placeholder:text-2xl bg-icon-dollar bg-no-repeat bg-left bg-origin-content"
        onChange={(e) => props.setBillValue(parseInt(e.target.value))}
      />
    </form>
  );
};

export default BillForm;
