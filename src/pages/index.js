import Head from 'next/head'
import Image from 'next/image'
import { btnContact } from '@/components/btnContact';
import Services from '@/components/Services';
import AttentionDays from '@/components/AttentionDays';


export default function Home() {
	const dataContact = [
		["https://www.svgrepo.com/show/303147/whatsapp-icon-logo.svg",
			"https://wa.me/5492645080812","whatsapp-logo"
		],
		["https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg",
			"https://www.instagram.com/hardsoft_sanjuan/","instagram-logo"
		],
		["https://www.svgrepo.com/show/303113/facebook-icon-logo.svg",
			"https://www.facebook.com/people/HardSoft-San-Juan/100076109772609/?locale=es_AR",
			"facebook-logo"
		],
		["https://www.svgrepo.com/show/381000/new-logo-gmail.svg",
			"mailto:hardsoft.sj@gmail.com","gmail-logo"
		]
	];
	const days = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"]

  return (
    <>
      <Head>
				
        <title>HardSoft</title>
        <meta name="description" content="Soporte tecnico informatico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-sky-950'>
				<section>
					<header 
						className="sm:h-cienvh bg-cover bg-[url('./../resources/header.jpg')]">
						<div
							className='
								m-0 sm:h-full bg-gradient-to-b from-black/60
								from-80% to-sky-950 pt-2
								'
							>
							<div
								className='flex justify-center justify-between w-full px-10'
								>
									<Image 
										src={"/1.png"}
										width={512}
										height={512}
										className='w-24 mt-1 mx-0 pb-1'/>
								<a
									className='mx-0 my-8 w-max bg-sky-900 p-2'
									href='#contact'
									>
									Contáctanos
								</a>
							</div>
							<h1 className='mx-auto w-max pt-32 lg:pt-36 
								text-5xl 2xl:pt-72 2xl:text-6xl'
								>
									HardSoft
							</h1>
							<h1 className='mx-auto w-max text-3xl pt-5 pb-72 sm:pb-0'>
								Soporte técnico informático
							</h1>
						</div>
					</header>
				</section>
					
				<section className='w-11/12 sm:w-7/12 mx-auto mt-12'>
					<h3 className='m-auto w-max text-2xl sm:text-3xl mb-2'>Servicios</h3>
					<hr
						className='bg-sky-900/50 border-0 h-1 mb-4 mx-auto w-40 sm:w-full'/>
					<Services />
				</section>

				<section className='w-11/12 sm:w-7/12 mx-auto mt-12 mb-14'>
					<p className='w-max m-auto text-2xl sm:text-3xl mb-2'>
						Nos encontramos en
					</p>
					<hr
						className='bg-sky-900/50 border-0 h-1 mb-4 w-60 sm:w-72
							mx-auto sm:w-full'
						/>
					<iframe
						src="
							https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1471.64224
							1704666!2d-68.57400704670641!3d-31.537027653370163!2m3!1f0!2f0!3
							f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968140ffc0882c7f%3A0x2ea0
							5f69ffb4bc17!2sJuan%20Lavalle%20Oeste%20562%2C%20Rivadavia%2C%20
							San%20Juan!5e0!3m2!1ses-419!2sar!4v1685543360301!5m2!1ses-419!2s
							ar
							"
						className='w-full border-0 mx-auto'
						height="300"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade">
					</iframe>
				</section>

				<footer 
					className='py-5 w-full bg-sky-900/50'
					>
					<div className='m-0 py-5 px-14 sm:px-0 w-full flex flex-col sm:flex-row'>
						<div className='w-full sm:w-4/12 sm:mx-4 py-5'>
							<p
								className='w-max m-auto text-xl'
								id="contact"
								>
								Contáctanos
							</p>
							<hr className='w-7/12 m-auto mt-2'/>
							<div className='flex flex-row w-full sm:px-20 sm:px-16 py-1 justify-center'>
								{
									dataContact.map((dataCont, index)=>{
										return btnContact(dataCont, index)
									})
								}
							</div>
						</div>
						<div className='w-full sm:w-4/12 sm:mx-4 py-5'>
							<p className='w-max m-auto text-xl'>
								Ubicación
							</p>
							<hr className='w-7/12 m-auto mt-2'/>
							<p 
								className='w-8/12 sm:w-full m-auto mt-5 text-center
									text-lg text-gray-300'
								>
									Juan Lavalle 562 (O), Rivadavia, San Juan
							</p>
						</div>
						<div className='w-full sm:w-4/12 sm:mx-4 py-5'>
							<p className='w-max m-auto text-xl'>
								Horarios de atención
							</p>
							<hr className='w-7/12 m-auto mt-2'/>
							<div className='flex flex-col pt-4'>
								{
									days.map((day, index) => {
										return <AttentionDays day={day} indexx={index} key={index}/>
									})
								}
							</div>
						</div>
					</div>
					<div className='flex flex-row w-screen justify-center'>
						<p className='sm:w-5/12 mr-3 text-lg sm:text-end'>Desarrollado por Mathias Ledesma</p>
						<a
							className='sm:w-2/12'
							href='https://www.linkedin.com/in/mathiled/'
							target="_blank"
							>
								<Image src="/linkedin.png" width={25} height={25} className='invert'/>
						</a>
						<p className='ml-6 sm:mr-10 sm:w-5/12 text-lg sm:text-center'>© 2023</p>
					</div>
				</footer>
				
			</main>
    </>
  )
}
