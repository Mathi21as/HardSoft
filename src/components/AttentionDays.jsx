const AttentionDays = ( {day, indexx} ) => {
	return(
		<p 
			className="my-1 w-full text-center text-md text-gray-300"
			key={indexx}
			>
			{day !== "Dom" ? day + ": 09:00 - 18:00" : day + ": Cerrado"}
		</p>
	)
}

export default AttentionDays;