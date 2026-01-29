import React, { useEffect, useState } from 'react';
import api from '../lib/axios';

// Color mapping for teams based on team name
const getTeamColor = (teamName) => {
    const colorMap = {
        'India': 'from-orange-500 to-orange-600',
        'India Women': 'from-orange-500 to-orange-600',
        'Pakistan': 'from-green-500 to-green-600',
        'Pakistan Women': 'from-green-500 to-green-600',
        'Bangladesh': 'from-red-500 to-red-600',
        'Bangladesh Women': 'from-red-500 to-red-600',
        'Sri Lanka': 'from-blue-500 to-blue-600',
        'Sri Lanka Women': 'from-blue-500 to-blue-600',
        'New Zealand': 'from-black to-gray-700',
        'New Zealand Women': 'from-black to-gray-700',
        'Australia': 'from-yellow-500 to-yellow-600',
        'Australia Women': 'from-yellow-500 to-yellow-600',
        'England': 'from-blue-700 to-blue-800',
        'England Women': 'from-blue-700 to-blue-800',
        'South Africa': 'from-green-700 to-green-800',
        'South Africa Women': 'from-green-700 to-green-800',
        'West Indies': 'from-purple-600 to-purple-700',
        'West Indies Women': 'from-purple-600 to-purple-700',
        'Afghanistan': 'from-red-600 to-red-700',
        'Afghanistan Women': 'from-red-600 to-red-700',
        'Ireland': 'from-green-600 to-green-700',
        'Ireland Women': 'from-green-600 to-green-700',
        'Netherlands': 'from-orange-600 to-orange-700',
        'Netherlands Women': 'from-orange-600 to-orange-700',
    };
    return colorMap[teamName] || 'from-slate-500 to-slate-600';
};

export default function Team() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        api.get('/cricket/v1/series/standing', {
            params: {
                series_id: 13146,
                lang: 'en',
                feed_format: 'json',
                client_id: 'fe6871d5b7f9',
            },
        })
        .then((response) => {
            const teamsData = response.data?.data?.standings?.stage1?.groups?.[0]?.team;
            setTeams(teamsData || []);
            console.log(teamsData, 'fetched teams data');
        })
        .catch((err) => {
            console.error('API ERROR 👉', err);
        });
    }, []);

    return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 flex items-center justify-center'>
      <div className='w-full max-w-4xl'>
        <h1 className='text-5xl font-bold text-center text-slate-900 mb-4'>Our Team</h1>
        <p className='text-center text-slate-600 text-lg mb-12'>Meet the amazing people behind our success!</p>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {teams.map((team, index) => (
            <li key={index} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className={`h-3 bg-gradient-to-r ${getTeamColor(team.name)}`}></div>
              <div className='p-6 flex flex-col items-center'>
                <div className={`w-24 h-24 rounded-full mb-4 bg-gradient-to-br ${getTeamColor(team.name)} flex items-center justify-center`}>
                  <img src={team.img} alt={team.name} className='w-20 h-20 rounded-full object-cover' />
                </div>
                <h2 className='text-xl font-semibold text-slate-900'>{team.name}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}