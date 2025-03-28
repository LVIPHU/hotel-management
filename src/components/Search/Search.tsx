'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FC } from 'react';
import {FaChevronDown} from "react-icons/fa6";

type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

const Search: FC<Props> = ({
  roomTypeFilter,
  searchQuery,
  setRoomTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };

  return (
    <section className='bg-tertiary-light px-4 py-6 rounded-lg'>
      <div className='container mx-auto flex gap-4 flex-wrap justify-between items-center'>
        <div className='w-full md:1/3 lg:w-auto mb-4 md:mb-0'>
          <label className='block text-lg font-semibold mb-2 text-primary'>
            Loại chỗ nghỉ
          </label>
          <div className='grid shrink-0 grid-cols-1 focus-within:relative'>
            <select
              value={roomTypeFilter}
              onChange={handleRoomTypeChange}
              id="type"
              name="type"
              autoComplete="type"
              aria-label="type"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
            >
              <option value='All'>Tất cả</option>
              <option value='Hotel'>Hotel</option>
              <option value='Homestay'>Homestay</option>
              <option value='Villa'>Villa</option>
            </select>
            <FaChevronDown
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </div>
        </div>

        <div className='w-full md:1/3 lg:w-auto mb-4 md:mb-0 flex-none md:flex-1'>
          <label className='block text-lg font-medium mb-2 text-primary'>
            Tìm kiếm
          </label>
          <input
            type='search'
            id='search'
            placeholder='Tìm kiếm...'
            className='block w-full rounded-md bg-white px-3.5 py-2 text-base text-primary-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary'
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>

        <button
          className='btn-primary'
          type='button'
          onClick={handleFilterClick}
        >
          Tìm kiếm
        </button>
      </div>
    </section>
  );
};

export default Search;
