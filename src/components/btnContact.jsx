export const btnContact = (redSocial, index) => {
	
	return(
		<div className='w-10 sm:w-8 mt-5 mx-4 sm:mx-4 hover:animate-pulse-fast' key={index}>
			<a
				className="m-0 p-0 border-none"
				href={redSocial[1]}
				target="_blank"
				>
				<img
					src={redSocial[0]}
					alt={redSocial[3]}
					/>
			</a>
		</div>
	)
}