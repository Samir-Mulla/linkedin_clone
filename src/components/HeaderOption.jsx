import React from 'react';
import { Avatar } from '@mui/material';

function HeaderOption({avatar,Icon, title}) {
 return (
   <div className='flex flex-col items-center mr-6 text-gray-500 cursor-pointer hover:text-black mt-3 md:mt-0'>
       {Icon && <Icon className="text-8xl" />}
       {avatar &&(<Avatar className='text-8xl' sx={{width:25,height:25}} src={avatar}/>) 
       }
       <h3 className='text-sm font-normal'>{title}</h3>
   </div>
 )
}

export default HeaderOption;
