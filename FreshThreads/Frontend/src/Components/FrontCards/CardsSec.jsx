import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { AiFillSchedule } from "react-icons/ai";

const CardsSec = () => {
  return (
    <div className=' p-2 transition duration-300 ease-in-out transform hover:scale-90 hover:shadow-[0_4px_20px_rgba(0,0,0,0.7)]  ' >
      <Card className="  w-full max-w-[58rem] flex sm:flex-col  sm:items-center">
      <CardHeader
        shadow={false}
        floated={false}
        className=" sm:w-full sm:rounded-b-none sm:mb-4"
      >
        <img
          src="https://img.freepik.com/premium-photo/young-man-working-drycleaning-salon_392895-222629.jpg?semt=ais_hybrid"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="sm:w-full sm:text-center" >
        {/*<Typography variant="h6" color="gray" className="mb-4 uppercase">
          startups
        </Typography>*/}
        <Typography variant="h2" color="blue-gray" className="mb-8" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
      
        DRY CLEANING
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-6 flex items-center space-x-2">
  <AiFillSchedule />
  <span style={{ fontFamily: 'Poppins, sans-serif' }}>Your clothes tracked    </span>
</Typography>
        <Typography color="gray" className="mb-8 font-normal" style={{ fontFamily: 'Poppins, sans-serif'}}>
        You can schedule a pickup any day of the week. We’ll email you a photo and itemized inventory of everything being cleaned.

</Typography>
        {/* second */}
        <Typography variant="h4" color="blue-gray" className="mb-6 flex items-center space-x-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
  <AiFillSchedule />
  <span >Expert cleaning and stain removal
  </span>
</Typography>
        <Typography color="gray" className="mb-8 font-normal" style={{ fontFamily: 'Poppins, sans-serif' }}>
        We carefully follow the care label and inspect your clothes for stains,<br></br> we ensure they receive the optimal treatment.        </Typography>
        {/* thireds */}
        <Typography variant="h4" color="blue-gray" className="mb-6 flex items-center space-x-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
  <AiFillSchedule />
  <span>Pressed and returned on hangers
  </span>
</Typography>
        <Typography color="gray" className="mb-8 font-normal" style={{ fontFamily: 'Poppins, sans-serif'}}>
        Your clothes are delivered to your door, crisply folded and your socks paired, <br></br>ready to be worn or put into drawers.        </Typography> 


        {/* <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a> */}
      </CardBody>
    </Card>
    </div>
  )
}

export default CardsSec
