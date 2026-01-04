'use client'
import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
    return (
        <div className='flex justify-center items-center mt-10 px-2 lg:ml-10'>
            <div className='border border-slate-500 p-4 rounded-md overflow-hidden w-full max-w-[800px] md:max-w-[850px] shadow-lg bg-white/5'>
                <div className='scale-98 md:scale-100 origin-top-left'>
                    {/* Replace username with your GitHub username */}
                    <GitHubCalendar username="Imnarendra18" />
                </div>
            </div>
        </div>
    )
}

export default Github
