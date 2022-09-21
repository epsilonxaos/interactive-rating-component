import RatingOption from './components/RatingOption'
import iconStar from './assets/icon-star.svg'
import thanks from './assets/illustration-thank-you.svg'
import { useState } from 'react'
import './css/custom.css'

function App() {
	const ids = [1, 2, 3, 4, 5];
	const [rating, setRating] = useState(0);
	const [thx, setThx] = useState(false);

	const getRatingOption = function(){
		let getSelectedValue = document.querySelector('input[name="rating"]:checked');   
		if(getSelectedValue !== null) {
			let r = document.querySelector('[name="rating"]:checked').value;
			setRating(r);
			setThx(true);

			setTimeout(() => {
				document.querySelector('[name="rating"]:checked').checked = false;
				setRating(0);
				setThx(false);
			}, 10000);
		}
		else {
			let gOpts = document.getElementById("ratingOptions");
			gOpts.classList.add("dangerSend");

			setTimeout(() => {
				gOpts.classList.remove("dangerSend");
			}, 2000);
		}
	}

	return (
		<main className="h-screen bg-[#121417] grid place-content-center font-overpass">
			{/* Card de puntuacion */}
			<div className={`w-full max-w-[410px] bg-[#252d37] p-[35px] h-full max-h-[420px] text-[15px] rounded-3xl ${thx ? 'hidden' : ''}`}>
				<div className="h-[47px] w-[47px] rounded-full bg-[rgba(255,255,255,0.07)] flex items-center justify-center mb-7">
					<picture> <img src={iconStar} alt="Star" /> </picture>
				</div>
				<h1 className="mb-3 text-white font-bold text-[26px]">How did we do?</h1>
				<p className="text-[#959eac] leading-6 mb-6">Please let us know we did with your support request. All feedback is appreciated to help us improve our offering!</p>

				<ul className='flex items-center justify-between mb-7' id="ratingOptions">
					{ ids.map(i => <RatingOption id={i} key={i+'-rating-option'}/>) }
				</ul>

				<button className="transition-all bg-[#fb7413] hover:bg-white text-white hover:text-[#fb7413] w-full py-3 rounded-full font-normal tracking-widest" onClick={getRatingOption}>SUBMIT</button>
			</div>

			{/* Card agradecimiento */}
			<div className={`w-full max-w-[410px] bg-[#252d37] p-[35px] h-full max-h-[420px] text-[15px] rounded-3xl text-center ${thx ? '' : 'hidden'}`}>
				<picture> <img src={thanks} alt="Thanks" className="block max-w-full mx-auto mb-8" /> </picture>

				<p className="max-w-max bg-[rgba(255,255,255,0.07)] px-4 py-1 mx-auto rounded-full text-[#fb7413] font-normal mb-8">
					You selected {rating} out of 5
				</p>
				
				<h1 className="mb-3 text-white font-bold text-[26px]">Thanks you</h1>
				<p className="text-[#959eac] leading-6 mb-6">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
			</div>
		</main>
	)
}

export default App
