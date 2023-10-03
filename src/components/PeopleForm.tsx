const PeopleForm = (props: { people: number; setPeople: Function }) => {
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
        value={props.people}
        className="text-right text-very-dark-cyan bg-very-lightgrayish-cyan h-12 rounded-md outline-strong-cyan px-5 mt-2 w-full"
        onChange={(e) => props.setPeople(parseInt(e.target.value))}
      />
    </form>
  );
};

export default PeopleForm;
