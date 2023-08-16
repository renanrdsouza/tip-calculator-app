export default function TipCalculator() {
  return (
    <div className='flex flex-col items-center'>
      <div className='bg-logo bg-no-repeat w-logo h-logo'></div>
      <div className="bg-white w-mobile mt-10 rounded-xl py-10 px-8">
        <form className='flex flex-col'>
          <label htmlFor="bill" className='text-dark-grayish-cyan'>Bill</label>
          <input type="number" id="bill" name="bill" className="text-right text-very-dark-cyan bg-very-lightgrayish-cyan h-12 rounded-md outline-strong-cyan px-5 mt-2" />
        </form>
        <div className='grid grid-cols-2 gap-4 mt-8'>
          <h2 className='col-start-1 col-end-3 text-dark-grayish-cyan'>Select Tip %</h2>
          <button className='bg-very-dark-cyan text-white rounded-md h-12'>5%</button>
          <button className='bg-very-dark-cyan text-white rounded-md h-12'>10%</button>
          <button className='bg-very-dark-cyan text-white rounded-md h-12'>15%</button>
          <button className='bg-very-dark-cyan text-white rounded-md h-12'>25%</button>
          <button className='bg-very-dark-cyan text-white rounded-md h-12'>50%</button>
          <button className='bg-very-lightgrayish-cyan text-dark-grayish-cyan rounded-md h-12'>Custom</button>
        </div>
        <div className='mt-8'>
          <form>
            <label htmlFor="people" className='text-dark-grayish-cyan'>Number of People</label>
            <input type="number" name="people" id="people" className="text-right text-very-dark-cyan bg-very-lightgrayish-cyan h-12 rounded-md outline-strong-cyan px-5 mt-2 w-full"/>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  )
}