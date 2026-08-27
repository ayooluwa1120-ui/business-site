import React, { useState } from "react";

export function ServiceRequest() {
  const [status, setStatus] = useState<string>("idle");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
     e.preventDefault();
     setStatus("sending");

     const form = e.target;
     const data = new FormData(form);

    const formLink = import.meta.env.VITE_FORMLINK;
     
     if (!formLink) {
      setError("error");
      return;
     }

     const validateEmail = (value: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
     };

     if (!name.trim()) {
      setError("Your full name is required");
      return;
     }

     if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
     }

     if (!number) {
      setError("whatsapp number is required.");
      return;
     };

     try {
      const res = await fetch(formLink, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className='grid grid-cols-1 gap-12 mt-20 ml-6 mr-6 sm:ml-10 sm:mr-10 lg:grid-cols-2 lg:gap-0 lg:ml-20 lg:mr-0'>
      <div className='space-y-5'>
        <h3 className='text-3xl text-[#B8935A] font-semibold'>Tell me about your project</h3>
        <p className='text-white/50'>Fill in the brief and I&apos;ll reply within a day - with some
          <br />
          questions.
        </p>
        <p className='text-white/50'><span className='font-semibold text-white'>Response time</span> - Within 24 hours</p>
        <p className='text-white/50'><span className='font-semibold text-white'>Availability</span> - New projects welcome</p>
      </div>
      <form onSubmit={handleSubmit} className='mr-0 w-full max-w-110 overflow-hidden rounded-[3px] border border-[#26303D] bg-[#121A25] lg:mr-20'>
        <div className='border-b border-[#26303D] px-8 py-6'>
          <p className='font-[Fraunces] text-xl'>Project brief</p>
          <p className='mt-1 text-sm text-white/50'>A few details to get started.</p>
        </div>

        <div className='space-y-6 px-8 py-7'>
          <div>
            <label htmlFor='name' className='mb-3 block text-xs font-semibold'>Name</label>
            <input id='name' type='text' value={name} onChange={(e) => setName(e.target.value)} name='name' autoComplete="on" placeholder='Your full name' className='w-full border-0 border-b border-[#26303D] bg-transparent pb-3 text-sm text-white outline-none placeholder:text-[#647184] focus:border-[#B8935A]' />
          </div>

          <div className='grid gap-5 sm:grid-cols-2'>
            <div>
              <label htmlFor='email' className='mb-3 block text-xs font-semibold'>Email</label>
              <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} name='email' autoComplete="on" placeholder='you@email.com' className='w-full border-0 border-b border-[#26303D] bg-transparent pb-3 text-sm text-white outline-none placeholder:text-[#647184] focus:border-[#B8935A]' />
            </div>

            <div>
              <label htmlFor='number' className='mb-3 block text-xs font-semibold'>WhatsApp number</label>
              <input id='number' type='tel' value={number} onChange={(e) => setNumber(e.target.value)} name='number' autoComplete="off" placeholder='+231 ...' className='w-full border-0 border-b border-[#26303D] bg-transparent pb-3 text-sm text-white outline-none placeholder:text-[#647184] focus:border-[#B8935A]' />
            </div>
          </div>

          <div>
            <label htmlFor='service' className='mb-3 block text-xs font-semibold'>Type of project</label>
            <select id='service' name='service' defaultValue='' className='project-select w-full border-0 border-b border-[#26303D] bg-[#121A25] pb-3 text-sm text-white outline-none focus:border-[#B8935A]'>
              <option value='' disabled>Select one</option>
              <option value='custom-website'>Custom Website Development</option>
              <option value='landing-page'>Landing Page</option>
              <option value='single-page-app'>Single page web application</option>
              <option value='dashboard'>Internal Dashboard &amp; Data Visualization</option>
              <option value='ui-ux'>UI/UX Implementation</option>
              <option value='performance-seo'>Frontend Performance &amp; SEO Optimization</option>
              <option value='api-integration'>Third-Party API Integration</option>
              <option value='refactoring'>Code Refactoring &amp; Bug Fixing</option>
            </select>
          </div>

          <div>
            <label htmlFor='description' className='mb-3 block text-xs font-semibold'>Brief description of the project</label>
            <textarea id='description' name='description' rows={4} placeholder='Describe your project' className='w-full resize-none border-0 border-b border-[#26303D] bg-transparent pb-3 text-sm text-white outline-none placeholder:text-[#647184] focus:border-[#B8935A]' />
          </div>

          <button type='submit' disabled={status === 'sending'} className='w-full rounded-[2px] bg-[#B8935A] py-3 text-sm font-semibold text-black transition-colors hover:bg-[#d4af73] disabled:cursor-not-allowed disabled:opacity-60'>
           {status === 'sending' ? 'Sending...' : 'Send brief'}
          </button>
      
          {status === 'success' && (
            <p className='text-center text-xs text-green-500'>Thanks — I&apos;ll reply within 24 hours.</p>
          )}
        
            {error && <p className="text-sm" style={{ color: 'red' }}>{error}</p>}

         

          <p className='text-center text-xs text-[#718096]'>No spam. Just a reply about your project.</p>
        </div>
      </form>
    </section>
  )
}
