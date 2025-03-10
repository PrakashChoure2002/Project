import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { AiFillSchedule } from "react-icons/ai";
import CardsSec from './CardsSec';
import CardsThird from './CardsThird';

const Cards = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center mt-12">
    <div className=' p-2 transition duration-300 ease-in-out transform hover:scale-90 hover:shadow-[0_4px_20px_rgba(0,0,0,0.7)]  ' >
  <Card className="w-full max-w-[58rem] flex sm:flex-col  sm:items-center">
    <CardHeader
      shadow={false}
      floated={false}
      className=" sm:w-full sm:rounded-b-none sm:mb-4"
    >
      <img
        src="https://t3.ftcdn.net/jpg/06/81/26/90/360_F_681269043_IPTzItGqLolggMXPn8RR5ul3U3mSfuSB.jpg"
        alt="card-image"
        className="h-full w-full object-cover"
      />
    </CardHeader>
    <CardBody className="sm:w-full sm:text-center">
      <Typography variant="h2" color="blue-gray" className="mb-8" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
        WASH AND FOLD
      </Typography>
      <Typography variant="h4" color="blue-gray" className="mb-6 flex items-center space-x-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
        <AiFillSchedule />
        <span>Schedule a pickup</span>
      </Typography>
      <Typography color="gray" className="mb-8 font-normal" style={{ fontFamily: 'Poppins, sans-serif' }}>
        You can schedule a pickup any day of the week. Your Valet will arrive with your free, personalized Rinse bags between 8pm and 10pm to pick up your clothes.
      </Typography>
      <Typography variant="h4" color="blue-gray" className="mb-6 flex items-center space-x-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
        <AiFillSchedule />
        <span>Professional cleaning care</span>
      </Typography>
      <Typography color="gray" className="mb-8 font-normal" style={{ fontFamily: 'Poppins, sans-serif'}}>
        Lights and darks are separated and washed in cold water. Hypoallergenic detergent and <br /> fabric softener are free upon request.
      </Typography>
      <Typography variant="h4" color="blue-gray" className="mb-6 flex items-center space-x-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
        <AiFillSchedule />
        <span>Ready to wear</span>
      </Typography>
      <Typography color="gray" className="mb-8 font-normal" style={{ fontFamily: 'Poppins, sans-serif'}}>
        Your clothes are delivered to your door, crisply folded and your socks paired, <br /> ready to be worn or put into drawers.
      </Typography>
    </CardBody>
  </Card>
  </div>
  <CardsSec className="p-2" />
</div>


      <div className='flex justify-end mr-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-gray-200'>
        {/* <CardsSec/> */}

      </div>

      {/*<div className='ml-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-gray-200'>
        <CardsThird />

      </div>*/}


      
    </>
  )
}

export default Cards
