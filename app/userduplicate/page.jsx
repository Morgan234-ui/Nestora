'use client'


import React, {useState}from 'react'

const page = () => {
    const [form, setForm] = useState({firstName: '', MiddleName: "", lastname: "", email: "", password: ""})
    console.log(form)

    const {firstName, MiddleName, lastname, email, password } = form
    const create = async (e) => {
        e.preventDefault()
        const submit = await fetch("api/listings/createduplicate", {
            method: 'POST',
            body: JSON.stringify(form)
        })
        const data = submit.json()
        console.log(data)
    }


  return (
        <React.Fragment>
            <main>
                <section className='user-details'>
                    <form onSubmit={create}>
                        <div className='form-field'>
                            <label htmlFor="firstname">
                                FirstName
                            </label>
                            <input value={firstName} onChange={e => setForm({...form, firstName: e.target.value
                        })} type="text" id='firstname' name='' />
                        </div>
                        <div className='form-field'>
                            <label htmlFor="middlename">
                                MiddleName
                            </label>
                            <input value={MiddleName} onChange={e => setForm({...form, MiddleName: e.target.value
                        })} type="text" id='middlename' name='' />
                        </div>
                        <div className='form-field'>
                            <label htmlFor="lastname">
                                LastName
                            </label>
                            <input value={lastname} onChange={e => setForm({...form, lastname: e.target.value
                        })} type="text" id='lastname' name='' />
                        </div>
                        <div className='form-field'>
                            <label htmlFor="Email">
                                Email
                            </label>
                            <input value={email} onChange={e => setForm({...form, email: e.target.value
                        })} type="text" id='email' name='' />
                        </div>
                        <div className='form-field'>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input value={password} onChange={e => setForm({...form, password: e.target.value
                        })} type="number" id='password' name='' />
                        </div>
                        <div className="form-submit">
                            <input type="submit" value="submit" />
                        </div>
                    </form>
                </section>
            </main>
        </React.Fragment>
  )
}

export default page