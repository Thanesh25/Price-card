import React from 'react'
import PriceCard from "./components/PriceCard";
import './App.css'
const App = () => {
  const plans = [
    {
      Plan: "FREE",
      Price: "$0/month",
      features: [
        { name: 'singe user', available: true },
        { name: '50GB', available: true },
        { name: 'unlimited public project', available: true },
        { name: 'Community Acess', available: true },
        { name: 'unlimited private project', available: false },
        { name: 'Dedicated phone support', available: false },
        { name: 'Free subdomain', available: false },
        { name: 'Monthly status report', available: false },
      ],
      btn:false,
    },
    {
      Plan: "PLUS",
      Price: "$9/month",
      features: [
        { name: 'singe user', available: true },
        { name: '50GB', available: true },
        { name: 'unlimited public project', available: true },
        { name: 'Community Acess', available: true },
        { name: 'unlimited private project', available: true },
        { name: 'Dedicated phone support', available: true },
        { name: 'Free subdomain', available: true },
        { name: 'Monthly status report', available: false },
      ],
      btn:false,
    },
    {
      Plan: "PRO",
      Price: "$49/month",
      features: [
        { name: 'singe user', available: true },
        { name: '50GB', available: true },
        { name: 'unlimited public project', available: true },
        { name: 'Community Acess', available: true },
        { name: 'unlimited private project', available: true },
        { name: 'Dedicated phone support', available: true },
        { name: 'Free subdomain', available: true },
        { name: 'Monthly status report', available: true },
      ],
      btn:true,
    },
  ];
  
  return (
    <div className='app'>
      <h1 id='title'>React price page</h1>
      <div className='card-container'>
        {plans.map((user, index) => <PriceCard key={index} plan={user.Plan} price={user.Price} features={user.features} btn={user.btn} />)}
        
      </div>
    </div>
  )
}

export default App
