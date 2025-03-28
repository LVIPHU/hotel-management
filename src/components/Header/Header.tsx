'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useSession } from 'next-auth/react';

import ThemeContext from '@/context/themeContext';
import Image from 'next/image';
import {RiLoginCircleFill} from "react-icons/ri";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const { data: session } = useSession();

  return (
    <header
        className='py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
      <div className='flex gap-x-6 items-center w-full md:w-2/3'>
        <Link href={'/'} className={'cursor-pointer'}>
          <Image src={'/images/logo-removebg.png'} alt={'logo'} width={100} height={100}/>
        </Link>

        <ul className='flex items-center justify-between w-full md:w-2/3'>
          <li className='hover:-translate-y-2 duration-500 transition-all'>
            <Link href='/'>TRANG CHỦ</Link>
          </li>
          <li className='hover:-translate-y-2 duration-500 transition-all'>
            <Link href='/rooms'>CÁC CĂN HỘ</Link>
          </li>
          <li className='hover:-translate-y-2 duration-500 transition-all'>
            <Link href='/contact'>LIÊN HỆ</Link>
          </li>
          <li className='hover:-translate-y-2 duration-500 transition-all'>
            <Link href='/about'>VỀ CHÚNG TÔI</Link>
          </li>
        </ul>
      </div>

      <ul className='flex gap-x-6 items-center'>
        <li className='flex items-center'>
          {session?.user ? (
            <Link href={`/users/${session.user.id}`}>
              {session.user.image ? (
                <div className='w-10 h-10 rounded-full overflow-hidden'>
                  <Image
                    src={session.user.image}
                    alt={session.user.name!}
                    width={40}
                    height={40}
                    className='scale-animation img'
                  />
                </div>
              ) : (
                <FaUserCircle className='cursor-pointer text-3xl'/>
              )}
            </Link>
          ) : (
            <Link href='/auth'>
              <RiLoginCircleFill className='cursor-pointe text-3xl'/>
            </Link>
          )}
        </li>
        <li>
          {darkTheme ? (
            <MdOutlineLightMode
              className='cursor-pointer text-3xl'
              onClick={() => {
                setDarkTheme(false);
                localStorage.removeItem('hotel-theme');
              }}
            />
          ) : (
            <MdDarkMode
              className='cursor-pointer text-3xl'
              onClick={() => {
                setDarkTheme(true);
                localStorage.setItem('hotel-theme', 'true');
              }}
            />
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
