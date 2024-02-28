import {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
  } from '@heroicons/react/24/outline'
  
  const actions = [
    {
      title: 'React.js',
      href: '#',
      icon: ClockIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
      description: 'Harness the power of React.js to build blazing-fast and interactive user interfaces. With its component-based architecture and virtual DOM, React.js enables seamless development of scalable web applications.',
    },
    {
      title: 'TypeScript',
      href: '#',
      icon: CheckBadgeIcon,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
      description: 'Elevate your JavaScript development with TypeScript, a statically typed superset of JavaScript. TypeScript adds optional static types, interfaces, and other advanced features to JavaScript, enabling enhanced code quality, tooling support, and developer productivity.',
    },
    {
      title: 'Next.js',
      href: '#',
      icon: UsersIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
      description: 'Supercharge your React applications with Next.js, a minimalistic framework for server-side rendering and static site generation. Next.js simplifies the creation of React applications by providing built-in routing, server-side rendering, and other powerful features out of the box.',
    },
    {
      title: 'HTML & CSS with Tailwind CSS',
      href: '#',
      icon: BanknotesIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      description: 'Leverage the power of HTML and CSS, augmented by the utility-first framework Tailwind CSS, to create elegant and responsive web interfaces. HTML provides the structure, CSS offers styling capabilities, and Tailwind CSS enhances productivity with its pre-built utility classes for rapid UI development.',
    },
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function TechStack() {
    return (
      <div className='bg-gray-200 shadow pb-10'>
      <h1 className='text-4xl max-w-7xl m-auto py-10 font-semibold px-6'>Technologies we love</h1>
      <div className="divide-y divide-gray-200 overflow-hidden  sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 max-w-7xl m-auto px-6">
            
            {actions.map((action, actionIdx) => (
               <div
                 key={action.title}
                 className={classNames(
                   actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                   actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                   actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                   actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                   'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                 )}
               >
                 <div>
                   <span
                     className={classNames(
                       action.iconBackground,
                       action.iconForeground,
                       'inline-flex rounded-lg p-3 ring-4 ring-white'
                     )}
                   >
                     <action.icon className="h-6 w-6" aria-hidden="true" />
                   </span>
                 </div>
                 <div className="mt-8">
                   <h3 className="text-base font-semibold leading-6 text-gray-900">
                     <a href={action.href} className="focus:outline-none">
                       {/* Extend touch target to entire panel */}
                       <span className="absolute inset-0" aria-hidden="true" />
                       {action.title}
                     </a>
                   </h3>
                   <p className="mt-2 text-sm text-gray-500">
                     {action.description}
                   </p>
                 </div>
                 <span
                   className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                   aria-hidden="true"
                 >
                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                   </svg>
                 </span>
               </div>
             ))}
           </div>
      </div>
      
    )
  }
  