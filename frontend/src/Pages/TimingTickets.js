
import React from 'react'

function TimingTickets() {
  return (
    <div className='totalcontainer'>
        <div class="containerss">
        <h1><b>Wonderla Timings</b></h1>
        <h2 class="head">Weekdays</h2> 
        <p class="head">___</p>
        </div>
        <div className='timing'>
            <div className='timing1'>
                <h2 style={{ fontSize: '2em' }}>Park Timings</h2>
                <p style={{ fontSize: '2em' }}>11:00 AM - 7:00 PM</p>

            </div>
            <div className='timing2'>
                <h2 style={{ fontSize: '2em' }} >Water Park Timings</h2>
                <p style={{ fontSize: '2em' }}>12:00 PM - 6:00 PM</p>
            </div>
        </div>
        <h2 class="head1">Weekends and Holidays</h2>
        <p class="head">___</p>
        <div className='timing'>
            <div className='timing1'>
                <h2 style={{ fontSize: '2em' }}>Park Timings</h2>
                <p style={{ fontSize: '2em' }}>11:00 AM - 7:00 PM</p>

            </div>
            <div className='timing2'>
                <h2 style={{ fontSize: '2em' }} >Water Park Timings</h2>
                <p style={{ fontSize: '2em' }}>11:00 PM - 6:00 PM</p>
            </div>
        </div>
        <h1 style={{textAlign:'center',marginTop:'30px'}}><b>Wonderla Timings</b></h1>
        <h2 className='head1'>Ticket Prices</h2>
        <p class="head">___</p>
        <div className='timing'>
            <div className='timing1'>
                <h2 style={{ fontSize: '2em' }}>Adult Tickets</h2>
                <p style={{ fontSize: '2em' }}>1350/-</p>

            </div>
            <div className='timing2'>
                <h2 style={{ fontSize: '2em' }} >Child Ticket</h2>
                <p style={{ fontSize: '2em' }}>750/-</p>
            </div>
        </div>
        <br></br>
        <br></br>

    </div>
  )
}

export default TimingTickets