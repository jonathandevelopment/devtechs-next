import Image from "next/image";

const projects = [
  {name:"Team Sparta",
   logoSrc: "/images/teamSparta.png",
   url:"https://www.teamsparta.info/"
  },
  {name:"Evolución Sonora",
   logoSrc: "/images/evo.webp",
   url:"https://www.evolucionsonora.com/"
  },
  {name:"CannaStore",
   logoSrc: "/images/cannastore.svg",
   url:"https://e-commerce-canastore.vercel.app/"
  },
  {name:"Roles Griegos",
   logoSrc: "/images/logoroles.png",
   url:"https://rolesgriegos.netlify.app/"
  }
];

export default function Experience() {
    return (
      <div id="trusted" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight ">Trusted by the most innovative teams</h2>
              <p className="mt-6 text-lg leading-8 text-gray-700">
              At the heart of creative innovation, our valued clients, including leading teams from various industries, rely on us to bring their digital visions to life with unmatched style and simplicity.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Contact us <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 gap-12 sm:gap-14 lg:mx-0 lg:max-w-none lg:pl-8">
              {projects.map((project, index) => (
                <a
                  key={project.name}
                  href={project.url}
                  className="flex flex-col items-center justify-between transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-300 hover:underline  hover:shadow-md"
                >
                  <Image
                    className="object-contain object-center w-full h-40 lg:h-48"
                    src={project.logoSrc}
                    alt={project.name}
                    width={400}
                    height={400}
                  />
                  <p className="text-center text-xl font-semibold py-2">{project.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  