function RatingOption({id}){
	return(
		<li>
			<input type="radio" name="rating" id={`rating_${id}`} value={id} className="hidden peer"/>
			<label htmlFor={`rating_${id}`} className="text-[#959eac] hover:text-white font-bold cursor-pointer w-[50px] h-[50px] rounded-full transition-all hover:bg-[#959eac] bg-[rgba(255,255,255,0.07)] peer-checked:bg-[#fb7413] peer-checked:text-white flex items-center justify-center">
				<span className="leading-[0.8]">{id}</span>
			</label>
		</li>
	)
}

export default RatingOption;