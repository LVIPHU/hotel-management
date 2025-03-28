import { FC } from 'react';
import Image from 'next/image';

import { Room } from '@/models/room';
import Link from 'next/link';
import {formatMoney} from "@/utils";

type Props = {
  room: Room;
};

const RoomCard: FC<Props> = props => {
  const {
    room: { coverImage, name, price, type, description, slug, isBooked },
  } = props;

  return (
    <div className='rounded-xl w-72 mb-10 mx-auto md:mx-0 overflow-hidden text-black'>
      <div className='h-60 overflow-hidden'>
        <Image
          src={coverImage.url}
          alt={name}
          width={250}
          height={250}
          className='img scale-animation'
        />
      </div>

      <div className='p-4 bg-white'>
        <div className='flex flex-col gap-y-3 text-xl font-semibold'>
          <p>{name}</p>
          <p className={'w-full text-right'}>{formatMoney(price)} ₫ / 1 Đêm</p>
        </div>

        <p className='pt-2 text-md'>{type}</p>

        <p className='pt-3 pb-6'>{description.slice(0, 97)}...</p>

        <Link
          href={`/rooms/${slug.current}`}
          className='bg-primary inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:-translate-y-2 hover:shadow-lg transition-all duration-500'
        >
          {isBooked ? 'Đã Được Đặt' : 'Đặt Ngay'}
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
