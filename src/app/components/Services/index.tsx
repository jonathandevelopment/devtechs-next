import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
  
  const features = [
    {
      name: 'Web development',
      description: 'Embark on a journey of digital innovation with our expert team proficient in full-stack development. We craft bespoke websites using cutting-edge frameworks to ensure seamless functionality and unparalleled user experiences.',
      icon: Cog6ToothIcon   ,
    },
    {
      name: 'SEO Integration:',
      description: 'Unlock the potential of your website with our SEO expertise. We employ strategic optimization techniques to enhance your visibility and rankings across search engines, driving organic traffic and maximizing your online reach.',
      icon: LockClosedIcon,
    },
    {
      name: 'Hosting and Domain Configuration:',
      description: 'Experience peace of mind with our reliable hosting and domain configuration services. We handle the technical intricacies, providing secure and stable hosting solutions tailored to your specific needs, coupled with seamless domain setup and management.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Design Excellence:',
      description: 'Elevate your brand with captivating designs that leave a lasting impression. Our talented designers blend creativity with functionality to deliver visually stunning websites that reflect your brand identity and resonate with your target audience.',
      icon: FingerPrintIcon,
    },
    {
      name: 'Content Management Systems (CMS):',
      description: 'Empower your content strategy with our versatile CMS solutions. We specialize in implementing robust CMS platforms tailored to your needs, enabling effortless content creation, management, and publication. ',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Automation:',
      description: 'Transform your workflow with the power of automation using Zapier. Seamlessly integrate your favorite apps and automate repetitive tasks, saving time and resources while enhancing productivity.  ',
      icon: ServerIcon,
    },
  ]
  
  export default function Services() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-800">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">No Website? No problem.</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Need an online presence but don't have a website? At <em>DevTechs</em>, we offer comprehensive web development and technology solutions to help you establish your online presence hassle-free. 
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-700" aria-hidden="true" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  