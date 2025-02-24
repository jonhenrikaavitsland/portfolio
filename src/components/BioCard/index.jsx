import Tag from './Tag';

export default function BioCard() {
  return (
    <div className='bg-black/60'>
      <div className='px-5 pt-5 pb-10 md:py-15 flex flex-col md:flex-row gap-5 md:gap-10 justify-center text-white lg:container mx-auto'>
        <div>
          <img src='/circle-user-duotone-thin.svg' alt='my photo' className='h-25 aspect-square object-cover mx-auto md:mx-0' />
        </div>
        <section className='flex flex-col gap-3 text-center md:text-start'>
          <h1 className='font-bold text-2xl leading-8'>Jon Henrik Åvitsland</h1>
          <div className='flex gap-1.5 mx-auto md:mx-0'>
            <Tag>frontend developer</Tag>
            <Tag>UI/UX Designer</Tag>
          </div>
          <p>
            <span className='capitalize'>passionate</span> about creating engaging web experiences
          </p>
        </section>
        <div className='flex grow items-center justify-center md:justify-end'>
          <div>
            <button className='p-3 rounded-lg capitalize w-40 bg-black hover:bg-black/60 text-white font-semibold cursor-pointer'>view projects</button>
          </div>
        </div>
      </div>
    </div>
  );
}
