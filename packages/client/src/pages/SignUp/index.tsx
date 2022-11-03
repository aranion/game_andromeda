/* 

import Button from '../../components/Button';
import Input from '../../components/Input';
import Star from '../../components/Star';
import './SignUp.css';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterList } from '../../router/routerList';
import React from 'react';


export default function SignUp() {
  const navigate = useNavigate();
  const navigateSignIn = useCallback(() => navigate(RouterList.SIGN_IN), [navigate]);
  const handleSignUp = (e: Event) => {
    e.preventDefault();
    console.log('Registration hasnt been implemented yet');
    navigateSignIn();
  };

  return (
  <>
  <div className='registration'>
    <div className='mobile__hide'>
      <Star top='3%' left='10%' />
      <Star top='22%' left='21%' />
      <Star top='39%' left='4%' />
      <Star top='52%' left='19%' />
      <Star top='67%' left='10%' />
      <Star top='80%' left='4%' />
      <Star top='85%' left='18%' />
      <Star top='4%' left='76%' />
      <Star top='11%' left='91%' />
      <Star top='29%' left='82%' />
      <Star top='38%' left='93%' />
      <Star top='64%' left='74%' />
      <Star top='58%' left='92%' />
      <Star top='77%' left='88%' />
    </div>

    <h1 className='registration__title'>
      Journey<br />
      to the<br />
      Andromeda
    </h1>

    <form className='registration__signin'>
      <Input placeholder='Email' className='registration__input' />
      <Input placeholder='Login' className='registration__input' />
      <Input placeholder='First Name' className='registration__input' />
      <Input placeholder='Last Name' className='registration__input' />
      <Input placeholder='Phone' className='registration__input' />
      <Input placeholder='Password' className='registration__input' />
      <Input placeholder='Password (Again)' className='registration__input' />
      <Button className='registration__button__signin' onClick={handleSignUp}>Sign Up</Button>
    </form>

    <div className='registration__signup'>
      <Star size='small' className='star__relative' />
      <Button className='registration__button__signup' onClick={navigateSignIn}>Sign In</Button>
      <Star size='small' className='star__relative' />
    </div>
  </div>
  </>
  );
} */
