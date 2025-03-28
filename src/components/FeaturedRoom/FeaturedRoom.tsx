'use client';

import { FC } from 'react';
import Image from 'next/image';

import { Room } from '@/models/room';
import Link from 'next/link';
import {formatMoney} from "@/utils";

type Props = {
  featuredRoom: Room;
};

const FeaturedRoom: FC<Props> = props => {
  const { featuredRoom } = props;
  if (!featuredRoom) return null;
  return (
    <section className='flex md:flex-row flex-col px-4 my-16 items-center gap-12 container mx-auto'>
      <div className='md:grid gap-8 grid-cols-1'>
        <div className='rounded-2xl overflow-hidden h-48 mb-4 md:mb-0'>
          <Image
            src={featuredRoom?.coverImage?.url}
            alt={featuredRoom?.name}
            width={300}
            height={300}
            className='img scale-animation'
          />
        </div>
        <div className='grid grid-cols-2 gap-8 h-48'>
          {featuredRoom?.images.splice(1, 2).map(image => (
            <div key={image._key} className='rounded-2xl overflow-hidden'>
              <Image
                src={image.url}
                alt={image._key}
                width={300}
                height={300}
                className='img scale-animation'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='md:py-10 md:w-1/2 lg:w-2/3 text-left'>
        <h3 className='font-heading mb-12'>Căn Hộ Nổi Bật</h3>

        <p className='font-normal '>{featuredRoom?.description}</p>

        <div className='flex flex-col md:flex-row md:items-end justify-between mt-5'>
          <div className='flex mb-3 md:mb-0'>
            <div className='flex gap-3 flex-col items-center justify-center mr-6 md:mr-10'>
              <p className='text-xs lg:text-xl text-center'>Chỉ Từ</p>
              <p className='md:font-bold flex font-medium text-lg xl:text-5xl'>
                {formatMoney(featuredRoom?.price)} ₫
              </p>
            </div>
            <div className='flex gap-3 flex-col items-center justify-center mr-4'>
              <p className='text-xs lg:text-xl text-center'>GIẢM GIÁ THÊM</p>
              <p className='md:font-bold flex font-medium text-lg xl:text-5xl'>
                {featuredRoom?.discount} %
              </p>
            </div>
          </div>

          <Link
              href={`/rooms/${featuredRoom?.slug?.current}`}
              className='border h-fit text-center border-tertiary-dark text-tertiary-dark px-3 py-2 lg:py-5 lg:px-7 rounded-2xl font-bold lg:text-xl'
          >
            Thêm Thông Tin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoom;
