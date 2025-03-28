import Image from 'next/image';

const Gallery = () => {
    return (
        <section className='mx-auto container my-16 h-full'>
            <h3 className='font-heading mb-3'>Khám phá Việt Nam</h3>
            <p className='mb-6 text-xs lg:text-xl'>Các điểm đến phổ biến này có nhiều điều chờ đón bạn</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='h-96 relative'>
                        <Image
                            alt='Da Lat'
                            src='/images/province/da-lat.jpg'
                            layout='fill'
                            objectFit='cover'
                            className='rounded-xl shadow-lg'
                        />
                    </div>
                    <div className='h-96 relative'>
                        <Image
                            alt='Vung Tau'
                            src='/images/province/vung-tau.jpg'
                            layout='fill'
                            objectFit='cover'
                            className='rounded-xl shadow-lg'
                        />
                    </div>
                    <div className='col-span-2 h-96 relative'>
                        <Image
                            alt='Ho Chi Minh'
                            src='/images/province/ho-chi-minh.jpg'
                            layout='fill'
                            objectFit='cover'
                            className='rounded-xl shadow-lg'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='col-span-2 h-96 relative'>
                        <Image
                            alt='Ha Noi'
                            src='/images/province/ha-noi.jpg'
                            layout='fill'
                            objectFit='cover'
                            className='rounded-xl shadow-lg'
                        />
                    </div>
                    <div className='h-96 relative'>
                        <Image
                            alt='Da Nang'
                            src='/images/province/da-nang.jpg'
                            layout='fill'
                            objectFit='cover'
                            className='rounded-xl shadow-lg'
                        />
                    </div>
                    <div className='h-96 relative'>
                        <Image
                            alt='Quy Nhon'
                            src='/images/province/quy-nhon.jpg'
                            layout='fill'
                            objectFit='cover'
                            className='rounded-xl shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
