const Services = () => {
	const images = [
		["bg-[url('./../resources/limpieza-y-mantenimiento.jpg')]",
			"Limpieza y mantenimiento",
			`Mantén tu equipo en condiciones óptimas con nuestro servicio de limpieza y mantenimiento. Realizamos una limpieza 
			exhaustiva de hardware y software para eliminar el polvo, optimizar la ventilación y asegurarnos de que todos los 
			componentes estén en buen estado. Además, realizamos actualizaciones y verificaciones de seguridad para mantener tu 
			equipo funcionando sin problemas.`
		],
		["bg-[url('./../resources/instalar-componentes.jpg')]",
			"Instalación de componentes",
			`¿Necesitas agregar nuevos componentes a tu equipo? Ya sea una tarjeta gráfica, memoria RAM o cualquier otro 
			dispositivo, nuestro servicio de instalación de componentes se encarga de todo. Nos aseguramos de que los componentes 
			estén correctamente instalados y configurados, para que puedas disfrutar de un rendimiento óptimo.`
		],
		["bg-[url('./../resources/backup.jpg')]",
			"Backup de datos",
			`Nuestro servicio de backup te brinda la tranquilidad de que tus datos importantes están seguros y protegidos. 
			Realizamos copias de seguridad regulares de tus archivos y configuramos sistemas de almacenamiento confiables. 
			En caso de pérdida de datos o fallas del sistema, podemos restaurar tus archivos rápidamente para minimizar 
			cualquier interrupción en tu trabajo.`
		],
		["bg-[url('./../resources/so-install.jpg')]", 
			"Instalación de sistema operativo",
			`¿Necesitas un sistema operativo nuevo o una actualización? Nuestro servicio de instalación de sistema operativo 
			se encarga de todo el proceso. Nos aseguramos de que tu sistema esté preparado para recibir la nueva instalación 
			y realizamos la configuración inicial para que puedas empezar a utilizarlo de inmediato.`
		],
		["bg-[url('./../resources/formateo-disco.jpg')]",
			"Formateo de disco",
			`Si deseas realizar un formateo completo de tu disco duro o eliminar todos los datos de manera segura, 
			nuestro servicio de formateo de discos es la solución. Garantizamos una eliminación total de los datos existentes 
			y te proporcionamos un disco limpio y listo para su uso.`
		],
		["bg-[url('./../resources/antivirus.jpg')]",
			"Eliminación de virus",
			`Los virus informáticos pueden ser una pesadilla, pero estamos aquí para ayudarte. Nuestro servicio de 
			eliminación de virus detecta y elimina de forma segura cualquier malware, spyware o virus que puedas tener en tu 
			sistema. Además, te ofrecemos asesoramiento sobre cómo mantener tu equipo protegido en el futuro.`
		],
		["bg-[url('./../resources/optimization.jpg')]",
			"Optimización",
			`Si sientes que tu equipo está funcionando lento o no alcanza todo su potencial, nuestro servicio de optimización 
			puede ayudarte. Realizamos una revisión exhaustiva de tu sistema, identificamos y eliminamos elementos innecesarios 
			o mal configurados, y ajustamos la configuración para mejorar el rendimiento general de tu equipo.`
		],
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
								<div className={`bg-cover ${img[0]} w-full h-40 2xl:h-64 my-4`}>
									<div 
										className={`
											 h-40 2xl:h-64 flex w-full
											${index % 2 === 0 ?
												`bg-gradient-to-r from-black/80 from-20% 
												via-sky-950 via-80% to-sky-950`                                         //transform via-100%
												:
												`bg-gradient-to-l from-black/80 from-20% via-sky-950 
													via-80% to-sky-950 text-end`
												}
											`}
										key={index}
											>
											<p className="px-5 w-6/12 text-lg h-max">
												{img[1]}
											</p>
											<p 
												className="
													px-5 w-6/12 text-lg h-full overflow-scroll 
													overflow-x-hidden 2xl:overflow-hidden"
												>
													
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