import Head from 'next/head'
import Image from 'next/image'
import { btnContact } from '@/components/btnContact';
import Services from '@/components/Services';
import AttentionDays from '@/components/AttentionDays';


export default function Home() {
	const dataContact = [
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
      <main className='bg-sky-950 text-white'>
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
										alt={"hardsoft-logo"}
										width={512}
										height={512}
										className='w-24 mt-1 mx-0 pb-1'
										/>
								<a
									className='mx-0 my-8 w-max bg-sky-900 p-2 
										hover:animate-pulse-fast'
									href='#contact'
									>
									Contáctanos
								</a>
							</div>
							<h1 className='mx-auto w-max pt-32 lg:pt-36 
								text-5xl 2xl:pt-72 2xl:text-6xl animate-fall'
								>
									HardSoft
							</h1>
							<h1 className='mx-auto w-max text-3xl pt-5 pb-72 
								sm:pb-0 animate-fall'
								>
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
					<p className='mt-7 mb-10 p-5 text-lg bg-sky-900/50'>
						Estos son solo algunos de los servicios que ofrecemos para cubrir tus necesidades de soporte técnico informático. Estamos 
						aquí para ayudarte a mantener tus equipos funcionando sin problemas y aprovechar al máximo la tecnología.
					</p>
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
									Rivadavia, San Juan
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
								<Image
									src="/linkedin.png"
									alt={"linkedin-logo-footer"}
									width={25}
									height={25}
									className='invert'
									/>
						</a>
						<p className='ml-6 sm:mr-10 sm:w-5/12 text-lg sm:text-center'>© 2023</p>
					</div>
				</footer>
				
			</main>
    </>
  )
}
