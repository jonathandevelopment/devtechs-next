

export default function Experience() {
    return (
      <div className="bg-gray-50 py-24 sm:py-32">
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
                  className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Contact us <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <a href="https://www.teamsparta.info/" className="flex justify-between gap-6 flex-col items-center hover:underline border border-gray-700 ">
                <img
                    className="  object-contain object-left"
                    src="/images/teamSparta.png"
                    alt="Tuple"
                    width={200}
                    height={200}
                />
                <p className="text-center">Team Sparta</p>
              </a>
              

              <img
                className="  object-contain object-left"
                src="/images/logoroles.png"
                alt="Reform"
                width={200}
                height={200}
              />
              <img
                className="  object-contain object-left"
                src="/images/cannastore.svg"
                alt="SavvyCal"
                width={200}
                height={200}
              />
              <img
                className="  object-contain object-left"
                src="/images/evo.webp"
                alt="Laravel"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  