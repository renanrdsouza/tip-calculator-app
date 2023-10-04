const PeopleForm = (props: { setPeople: Function }) => {
  return (
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
        placeholder="0"
        className="text-right text-very-dark-cyan bg-very-lightgrayish-cyan h-12 rounded-md outline-strong-cyan px-5 mt-2 w-full placeholder:text-2xl bg-icon-person bg-no-repeat bg-left bg-origin-content"
        onChange={(e) => props.setPeople(parseInt(e.target.value))}
      ></input>
    </form>
  );
};

export default PeopleForm;
