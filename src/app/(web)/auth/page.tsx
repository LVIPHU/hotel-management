'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { signUp } from 'next-auth-sanity/client';
import { signIn, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const defaultFormData = {
  email: '',
  name: '',
  password: '',
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const inputStyles =
    'border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none';

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push('/');
  }, [router, session]);

  const loginHandler = async () => {
    try {
      await signIn();
      router.push('/');
    } catch (error) {
      console.error(error);
      toast.error("Something wen't wrong");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user = await signUp(formData);
      if (user) {
        toast.success('Success. Please sign in');
      }
    } catch (error) {
      console.error(error);
      toast.error("Something wen't wrong");
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section>
      <div className='p-2 space-y-4 md:space-y-6 sm:p-8 w-full md:w-[70%] mx-auto'>
        <div className='flex mb-8 flex-col md:flex-row items-center justify-between'>
          <h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl'>
            Tạo Tài Khoản
          </h1>
          <p>HOẶC</p>
          <span className='inline-flex items-center'>
            <AiFillGithub
              onClick={loginHandler}
              className='mr-3 text-4xl cursor-pointer text-black dark:text-white'
            />{' '}
            |
            <FcGoogle
              onClick={loginHandler}
              className='ml-3 text-4xl cursor-pointer'
            />
          </span>
        </div>

        <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='name@company.com'
            required
            className={inputStyles}
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='name'
            placeholder='John Doe'
            required
            className={inputStyles}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            required
            minLength={6}
            className={inputStyles}
            value={formData.password}
            onChange={handleInputChange}
          />

          <button
            type='submit'
            className='w-full text-white bg-tertiary-light focus:outline-none font-semibold rounded-lg text-lg px-5 py-3 text-center'
          >
            Đăng Ký
          </button>
        </form>
        <div className='my-32 w-full h-[1px] bg-gray-200'></div>
        <button onClick={loginHandler}
                className='w-full text-white bg-primary focus:outline-none font-semibold rounded-lg text-lg px-5 py-3 text-center'>
          Trang Đăng Nhập
        </button>
      </div>
    </section>
  );
};

export default Auth;
