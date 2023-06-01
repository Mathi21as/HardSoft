const Services = () => {
	const images = [
		["bg-[url('./../resources/limpieza-y-mantenimiento.jpg')]",
			"Limpieza y mantenimiento"],
		["bg-[url('./../resources/instalar-componentes.jpg')]",
			"Instalación de componentes"],
		["bg-[url('./../resources/backup.jpg')]",
			"Backup de datos"],
		["bg-[url('./../resources/so-install.jpg')]", 
			"Instalación de sistema operativo"],
		["bg-[url('./../resources/formateo-disco.jpg')]",
			"Formateo de disco"],
		["bg-[url('./../resources/antivirus.jpg')]",
			"Eliminación de virus"],
		["bg-[url('./../resources/optimization.jpg')]",
			"Optimización de sistema"],
	];

	return(
		<>
			{
				images.map((img, index)=>{
					return(
						<div 
							className={`
								w-100 flex ${index === 0 || index % 2 === 0 ?
									"justify-start"
									:
									"justify-end"
								}
								`}
							key={index}>
								<div className={`bg-cover ${img[0]} w-7/12 h-40 2xl:h-64 my-4`}>
								<div 
									className={`
										 h-40 2xl:h-64 pt-14 flex
										${index % 2 === 0 ?
											`bg-gradient-to-r from-black/80 from-15% 
												via-black/40 via-60% to-sky-950`
											:
											`bg-gradient-to-l from-black/80 from-15% via-black/30 
												via-60% to-sky-950 justify-end text-end`
											}
										`}
									key={index}
										>
										<p className="px-5 w-8/12 sm:pt-3 text-lg">
											{img[1]}
										</p>
								</div>
								</div>
						</div>
					)
				})
			}
		</>
	)
}

export default Services;