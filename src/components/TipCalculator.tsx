export default function TipCalculator() {
  return (
    <div className='flex flex-col items-center'>
      <div className='bg-logo bg-no-repeat w-logo h-logo'></div>
      <div className="bg-white w-mobile mt-10 rounded-xl py-10 px-8 md:w-desktop md:grid md:grid-cols-2 md:gap-x-12">
        <div>
          <form className='flex flex-col'>
            <label htmlFor="bill" className='text-dark-grayish-cyan'>Bill</label>
            <input type="number" id="bill" name="bill" className="text-right text-very-dark-cyan bg-very-lightgrayish-cyan h-12 rounded-md outline-strong-cyan px-5 mt-2" />
          </form>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-8'>
            <h2 className='col-start-1 col-end-3 md:col-start-1 md:col-end-4 md:text-left text-dark-grayish-cyan'>Select Tip %</h2>
            <button className='bg-very-dark-cyan text-white rounded-md h-12 hover:bg-strong-cyan hover:opacity-60 text-2xl'>5%</button>
            <button className='bg-very-dark-cyan text-white rounded-md h-12 hover:bg-strong-cyan hover:opacity-60 text-2xl'>10%</button>
            <button className='bg-very-dark-cyan text-white rounded-md h-12 hover:bg-strong-cyan hover:opacity-60 text-2xl'>15%</button>
            <button className='bg-very-dark-cyan text-white rounded-md h-12 hover:bg-strong-cyan hover:opacity-60 text-2xl'>25%</button>
            <button className='bg-very-dark-cyan text-white rounded-md h-12 hover:bg-strong-cyan hover:opacity-60 text-2xl'>50%</button>
            <input type="text" placeholder="Custom" className='bg-very-lightgrayish-cyan text-dark-grayish-cyan rounded-md h-12 p-2 text-right focus:outline-strong-cyan placeholder:text-center placeholder:text-2xl'/>
          </div>
          <div className='mt-8'>
            <form>
              <label htmlFor="people" className='text-dark-grayish-cyan'>Number of People</label><span className="text-red-400 ms-6 invisible">Can't be zero</span>
              <input type="number" name="people" id="people" className="text-right text-very-dark-cyan bg-very-lightgrayish-cyan h-12 rounded-md outline-strong-cyan px-5 mt-2 w-full"/>
            </form>
          </div>
        </div>
        <div className="bg-very-dark-cyan flex flex-col justify-between p-6 rounded-2xl gap-7 md:h-full md:p-10">
          <div>
            <div className="flex justify-between mb-16">
              <div>
                <h2 className="text-white">Tip Amount</h2>
                <p className="text-grayish-cyan">/ person</p>
              </div>
              <div className="text-strong-cyan rounded-md text-4xl">
                $4.27
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="text-white">Total</h2>
                <p className="text-grayish-cyan">/ person</p>
              </div>
              <div className="text-strong-cyan rounded-md text-4xl">
                $32.79
              </div>
            </div>
          </div>
          <div>
            <button className="w-full bg-strong-cyan text-very-dark-cyan rounded-md py-3 hover:bg-strong-cyan-hover">RESET</button>
          </div>
        </div>
      </div>
    </div>
  )
}
