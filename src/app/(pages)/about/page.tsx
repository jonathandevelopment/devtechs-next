import Image from "next/image";
const 
teamData = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CTO",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Emily Brown",
      position: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    }
  ];// Import dynamic team member data

  export default function About() {
    return (
      <div className="mt-24 ">
        {/* Masthead */}
        <div className="relative h-64 bg-gray-900">
          {/* Image overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Masthead content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-4">Innovative Solutions for Digital Growth</h1>
            <p className="text-white text-lg md:text-xl text-center">DevTechs: Leading the way in revolutionizing digital experiences. No Website? No problem.</p>
          </div>
        </div>
  
        {/* Main content */}
        <div className="container  px-4 py-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our History</h2>
          <p className="text-lg leading-relaxed mb-8">
            Founded in 2015, DevTechs began as a small team of passionate developers with a vision to transform the digital landscape. Over the years, we have evolved into a leading technology company, pioneering innovative solutions that drive digital growth for businesses worldwide.
          </p>
  
          {/* Our Services */}
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Web Development</h3>
            <p className="text-lg leading-relaxed mb-4">
              At DevTechs, we specialize in crafting dynamic web experiences tailored to your unique business needs. From intuitive user interfaces to robust backend systems, our team of experts delivers cutting-edge web development solutions that propel your digital presence forward.
            </p>
            <h3 className="text-2xl font-bold mb-2">SEO Integration</h3>
            <p className="text-lg leading-relaxed mb-4">
              Drive organic traffic and boost your online visibility with our strategic SEO integration services. We optimize your website to rank higher on search engines, ensuring that your target audience can easily find and engage with your brand online.
            </p>
            <h3 className="text-2xl font-bold mb-2">Hosting and Domain Configuration</h3>
            <p className="text-lg leading-relaxed mb-4">
              Trust DevTechs to handle all your hosting and domain configuration needs. We provide reliable hosting solutions and seamless domain setup, ensuring that your website remains secure and accessible around the clock.
            </p>
            <h3 className="text-2xl font-bold mb-2">Design Excellence</h3>
            <p className="text-lg leading-relaxed mb-4">
              Elevate your brand with stunning designs that captivate and inspire. Our design team combines creativity with functionality to deliver visually striking websites that leave a lasting impression on your audience.
            </p>
            <h3 className="text-2xl font-bold mb-2">Content Management Systems (CMS)</h3>
            <p className="text-lg leading-relaxed mb-4">
              Take control of your content with our customizable CMS solutions. From content creation to publishing, our user-friendly platforms empower you to manage your website effortlessly, allowing you to focus on what matters most—growing your business.
            </p>
            <h3 className="text-2xl font-bold mb-2">Automation</h3>
            <p className="text-lg leading-relaxed mb-4">
              Streamline your workflow with automation tools tailored to your business needs. Our experts leverage the power of automation to optimize efficiency, reduce manual tasks, and accelerate growth, giving you the competitive edge in today&apos;s digital landscape.
            </p>
          </div>
  
          {/* Team section */}
          <h2 className="text-3xl font-bold mb-8 mt-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamData.map(member => (
              <div key={member.id} className="flex flex-col items-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
