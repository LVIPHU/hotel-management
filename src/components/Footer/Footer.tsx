import {BsFillTelephoneFill} from 'react-icons/bs';
import {FaHouse, FaLocationDot} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='mt-16'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap gap-16 items-center justify-between'>
          <div className='flex-1'>
            <div className='flex gap-x-2 items-center py-6'>
              <Link href='/'>
                <Image src={'/images/logo.png'} alt={'logo'} width={100} height={100} className={'cursor-pointer'}/>
              </Link>
              <h4 className='font-semibold text-lg '>VỀ CHÚNG TÔI</h4>
            </div>

            <div className='flex items-center pb-4'>
              <FaHouse />
              <p className='ml-2'>Công ty TNHH ZERO23 VIỆT NAM</p>
            </div>
            <div className='flex items-center pb-4'>
              <FaLocationDot/>
              <p className='ml-2'>19Z5 Nguyễn Hữu Cảnh, Phường 19, Quận Bình Thạnh, TP. Hồ Chí Minh</p>
            </div>
            <a href="mailto:zero23vietnam@gmail.com" className='flex items-center pb-4'>
              <MdEmail/>
              <p className='ml-2'>zero23vietnam@gmail.com</p>
            </a>
            <a href="tel:+84-97-449-3132" className='flex items-center cursor-pointer'>
              <BsFillTelephoneFill/>
              <p className='ml-2'>0974493132</p>
            </a>
          </div>

          <div className='flex-1'>
            <h4 className='font-semibold text-lg py-6'>DỊCH VỤ HỖ TRỢ</h4>
            <p className='pb-4'>Giờ làm việc</p>
            <p className='pb-4'>Thứ Hai - Thứ Sáu: 8:30AM - 17:30PM</p>
            <p className='pb-4'>Thứ Bảy - Chủ Nhật: 9:00AM - 17:00PM</p>
          </div>

        </div>
      </div>

      <div className='bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0' />
    </footer>
  );
};

export default Footer;
