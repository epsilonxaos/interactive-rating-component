import iconStar from './assets/icon-star.svg';

function App() {
	return (
		<div className="App h-screen bg-[#121417] grid place-content-center font-overpass">
			<div className="w-full max-w-[410px] bg-[#252d37] p-[35px] h-full max-h-[420px] text-[15px] rounded-3xl">
				<div className="h-[47px] w-[47px] rounded-full bg-[rgba(255,255,255,0.07)] flex items-center justify-center mb-7">
					<picture> <img src={iconStar} alt="Star" /> </picture>
				</div>
				<h1 className="mb-3 text-white font-bold text-[26px]">How did we do?</h1>
				<p className="text-[#959eac] leading-6 mb-3">Please let us know we did with your support request. All feedback is appreciated to help us improve our offering!</p>

				<ul>
					<li>
						<input type="radio" name="rating" id="rating_1" value="1" className="hidden"/>
						<label htmlFor="rating_1" className="text-white w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.07)] flex items-center justify-center">
							<span className="leading-[0.8]">1</span>
						</label>
					</li>
				</ul>

				<button className="bg-[#fb7413] text-white w-full py-3 rounded-full font-normal tracking-widest">SUBMIT</button>
			</div>
		</div>
	)
}

export default App
