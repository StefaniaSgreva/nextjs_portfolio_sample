import SocialLink from '@/components/SocialLink';

const Contact = () => {
  return (
    <div className='wrapper'>
        <div className='max-w-5xl mx-auto  flex flex-col gap-4 items-center justify-center'>
            <h2 className='text-2xl font-bold'>Let us create awesome products!</h2>
            <p className='text-lg tracking-wide font-medium text-center'>I am always open to discussing your project, impoving your online presence, or helping with Your website design and converting challenges.</p>
            <a href="mailto:stefania@sablab.it">
                <button className='w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-lg font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300'>Say Hello</button>
            </a>
        </div>

        <div className="mt-10 flex item-center justify-center gap-8 flex-wrap">
          <SocialLink 
            title="Github"
            link="https://github.com/"
          />
          <SocialLink 
            title="LinkedIn"
            link="https://www.linkedin.com/"
          />
          <SocialLink 
            title="Facebook"
            link="https://www.facebook.com/"
          />
          <SocialLink 
            title="Instagram"
            link="https://www.instagram.com/"
          />
        </div>
    </div>
  )
}

export default Contact