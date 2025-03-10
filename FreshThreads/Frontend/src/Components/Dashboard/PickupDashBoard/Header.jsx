import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';


const Header = () => {
  return (
    <>
    <div className='flex'>
    <Navbar bg="light" className="px-4">
      

      <div className='flex'>
        <span className="me-3 flex gap-2">Logged <span>as</span><strong>Alex</strong></span>
        <Button variant="outline-primary" className="me-2">Messages</Button>
        <Button variant="outline-primary" className="me-2">Notifications</Button>
      </div>
    </Navbar>
    </div>
    </>
  );
};

export default Header;



