'use client'

import React, { useState } from 'react'

const page = () => {
    const [form, setForm] = useState({location: '', price: 0, image: '', deal: '',  bath: 0,  duration: '',  size: '', room: 0,
        floor: ''
    })

        const {location, price, image, deal, duration, size, room,  floor, bath,} = form
        console.log(form)


    
     const create = async (e) => {
        e.preventDefault()
        const submit = await fetch("api/listings/createduplicate", {
            method: 'POST',
            body: JSON.stringify(form)
        })
        const data = await submit.json()
        console.log(data)
    }

  return (
       <React.Fragment>
        <header></header>
        <main>
            <section className="user-input">
                <form onSubmit={create} className='user-form'>
                    <div className="form-field">
                        <label htmlFor="location">
                            location
                            </label>
                        <input value={location} onChange={e => setForm({...form, location: e.target.value
                        })} type="text" name='' id='location' />
                    </div>
                    <div className="form-field">
                        <label htmlFor="price">
                            price
                            </label>
                        <input value={price} onChange={e => setForm({...form, price: e.target.value
                        })} type="number" name='' id='price' />
                    </div>
                    <div className="form-field">
                        <label htmlFor="image">
                            image
                            </label>
                        <input value={image} onChange={e => setForm({...form, image: e.target.value
                        })} type="text" name='' id='image' />
                    </div>
                    <div className="form-field">
                        <label htmlFor="deal">
                            deal
                            </label>
                        <input value={deal} onChange={e => setForm({...form, deal: e.target.value
                        })} type="text" name='' id='deal' />
                    </div>
                    <div className="form-field">
                        <label htmlFor="duration">duration</label>
                        <input value={duration} onChange={e => setForm({...form, duration: e.target.value
                        })} type="text" name='' id='duration' />
                    </div>
                    <div className="form-field">
                        <label htmlFor="size">size</label>
                        <input  value={size} onChange={e => setForm({...form, size: e.target.value
                        })} type="text" name='' id='size' />
                    </div>
                    <div className="form-field">
                        <label htmlFor="room">Room</label>
                        <input value={room} onChange={e => setForm({...form, room: e.target.value
                        })} type="number" name='' id='room' />
                    </div>
                    <div className="form-field">
                        <label htmlFor="floor">bath</label>
                        <input value={bath} onChange={e => setForm({...form, bath: e.target.value
                        })} type="number" name='' id='bath' />
                    </div>
                    <div className="form-field">
                        <label htmlFor="floor">floor</label>
                        <input value={floor} onChange={e => setForm({...form, floor: e.target.value
                        })} type="text" name='' id='floor' />
                    </div>
                    <div className="form-submit">
                        <input type="submit"  value='submit' />
                    </div>
                </form>
            </section>
            <section className="list"></section>
        </main>
        <footer></footer>
       </React.Fragment>
  )
}

export default page