import { Link } from "react-router";
import { services, socialLinks } from "~/arrays";
import { ServiceRequest } from "~/serviceRequest";
import { GoArrowUpRight } from "react-icons/go";


export default function BusinessPage() {
  return (
   <main>
   <NavBar />
   <Section1 />
   <Services />
   <Projects />
   <Stages />
   <ServiceRequest />
   <Footer />
   </main>
  )
}

function NavBar() {
  return (
   <nav className='flex justify-around mt-3 backdrop-blur-sm'>
    <p className="nav-name">AYOOLUWA</p>

    <span className='hidden space-x-5 sm:flex'>
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <Link key={index}
          to={social.href}
          className='text-xl transition-transform duration-300 hover:-translate-y-1 hover:text-[#B8935A]'
          >
            <Icon />
          </Link>
        )
      })}
    </span>
    <Link to="https://www.linkedin.com/in/joseph-olatunji" className='rounded-md bg-white p-1 px-3 text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4af73] hover:shadow-lg'>Connect</Link>
   </nav>
  );
}

function Section1() {
  return (
    <section className='mt-20 ml-10 lg:ml-20'>
      <h1 className='text-3xl lg:text-5xl'>Software development for 
        <br />
        businesses that <span className='text-[#B8935A]'>need it done</span> 
        <br />
        <span className='text-[#B8935A]'>right</span>.</h1>

        <p className='mt-5 opacity-80 text-md'>I build Websites and Web Apps frontend - turning designs 
          <br />
          into software your business can rely on and scale with.</p>

    <span className='lg:hidden space-x-5 flex mt-4'>
     {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <Link key={index}
          to={social.href}
          className='text-xl transition-transform duration-300 hover:-translate-y-1 hover:text-[#B8935A]'
          >
            <Icon />
          </Link>
            )
      })}
    </span>
    </section>
  );
}




function Services() {
  return (
    <section className='mt-27'>
      <h2 className='ml-30 text-2xl font-bold lg:ml-130'>Services</h2>

    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-7 ml-8'>
     {services.map((services, index) => (
      <div
        key={index}
        className='rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B8935A]/60 hover:bg-[#B8935A]/5 mr-9'
      >
        <h3 className='mb-3 text-lg font-semibold text-white'>{services.title}</h3>
        <p className='text-sm leading-6 text-white/70'>{services.description}</p>
      </div>
     ))}
    </div>
    </section>
  )
}

function Projects() {
  return (
    <section className='mt-24 px-6 sm:px-10 lg:px-20'>
     
     <p className='mb-6 text-md font-bold uppercase tracking-[0.2em] text-[#B8935A]'>Past project</p>

      <div className='max-w-3xl rounded-[3px] border border-[#26303D] bg-[#121A25] p-6 sm:p-8'>
       <p className='text-xl font-semibold text-white sm:text-2xl'>Interactive Service & Pricing Estimator</p>
       <p className='mt-3 max-w-xl text-sm leading-6 text-white/60'>Helps potential clients estimate 
        <br />
        custom service packages. (For demonstration)</p>

        <Link to="https://estimator-beta-six.vercel.app/" className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B8935A] transition-colors hover:text-[#d4af73]'>Visit<span className='text-base'><GoArrowUpRight /></span></Link>
      </div>
    </section>
  )
}


function Stages() {
  return (
    <section className='mt-15 px-5 sm:px-0'>
      <h3 className='text-xl font-semibold text-[#B8935A] ml-0 sm:ml-30'>How it works</h3>
      <p className='text-3xl font-bold ml-0 sm:ml-30'>Three stages, one point of contact.</p>

      <hr className="my-10 border-0 border-t border-white/20 w-full sm:w-250 ml-0 sm:ml-24"/>

      <span>
       <p className='text-xl ml-0 sm:ml-30'>Discovery</p>
      <p className='text-white/70 ml-0 sm:ml-30'>We define the problem, the users, and what &quot;done&quot; looks like - scope, timeline, and
        <br className='hidden sm:block' />
        budget agreed before any work begins.
       </p>
      </span>
       
       
         <hr className="my-10 border-0 border-t border-white/20 w-full sm:w-250 ml-0 sm:ml-24"/>
      
     

      <span>
        <p className='text-xl ml-0 sm:ml-30'>Build</p>
       <p className='text-white/70 ml-0 sm:ml-30'>Regular check-ins with working builds, not just progress reports. You see the product
        <br className='hidden sm:block' />
        take shape at every stage.
       </p>
      </span>

      <hr className="my-10 border-0 border-t border-white/20 w-full sm:w-250 ml-0 sm:ml-24"/>

      <span>
        <p className='text-xl ml-0 sm:ml-30'>Launch</p>
      <p className='text-white/70 ml-0 sm:ml-30'>Deployment, documentation and a proper handover - so you&apos;re never locked out of
        <br className='hidden sm:block' />
        your own product.
       </p>
      </span>
       <hr className="my-10 border-0 border-t border-white/20 w-full sm:w-300 ml-0 sm:ml-24"/>
    </section>
  )
}


function Footer() {
  return (
    <footer className='mt-24 border-t border-white/10 px-8 py-10 sm:px-20'>
      <div className='flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between'>
        <div>
          <p className='nav-name text-[#B8935A]'>AYOOLUWA</p>
        </div>
      </div>

      <p className='mt-10 text-xs text-white/40'>
        &copy; {new Date().getFullYear()} AYOOLUWA. All rights reserved.
      </p>
    </footer>
  )
}