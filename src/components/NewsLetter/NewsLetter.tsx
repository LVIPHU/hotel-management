const NewsLetter = () => {
  return (
    <section className='container mx-auto my-16'>
      <form className='bg-primary text-white px-4 rounded-xl md:rounded-[30px] flex flex-col justify-center items-center py-6 md:py-24'>
        <p className='md:font-semibold text-lg md:text-xl text-center mb-3'>
          Khám Phá Thêm Về Các Sản Phẩm Của Chúng Tôi
        </p>
        <h6 className='md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center'>
          Đăng Ký Để Nhận Thông Báo
        </h6>

        <div className='flex-col justify-center w-full md:flex-row flex pt-12'>
          <input
            type='email'
            placeholder='Email của bạn'
            className='bg-[#026057] h-11 md:h-16 mb-2 md:mb-0 rounded-xl pl-6 md:mr-5 md:w-[452px] text-white placeholder:text-white focus:outline-none'
          />
          <button type='button' className='btn-tertiary'>
            Đăng ký
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;
