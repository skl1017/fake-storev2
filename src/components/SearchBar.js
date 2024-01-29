import React from 'react';

export default function SearchBar(){
    return(
        <div className='w-full flex justify-between p-10 px-14'>
            <div className='flex gap-16'>
                <p className="text-5xl "><span className="logo-orange">shop</span><span className="logo-blue">Shop</span></p>
                <input className='p-2 rounded'type="text" placeholder="Search..."/>
            </div>

            <div>


                <div className='flex gap-10'>
                    <a href="">
                        <span className="material-symbols-outlined text-4xl">
                            shopping_bag
                        </span>
                    </a>
                    <a href="">
                        <span class="material-symbols-outlined text-4xl">
                            account_circle
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}