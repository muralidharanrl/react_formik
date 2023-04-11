import { useFormik } from 'formik'
import React from 'react'

const initialValues = {
  name: 'Muralidharan',
  email: '',
  channel: ''
}

const onSubmit = values => {
  console.log('formik values:', values)
}

const validate = values => {
  let errors = {}

  if(!values.name) {
    errors.name = 'Required'
  }
  if(!values.email) {
    errors.email = 'Required'
  }
  if(!values.channel) {
    errors.channel = 'Required'
  }

  return errors
}

const OldYoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
        
    })

    
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
        {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
        </div>

        <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
        {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
        </div>

        <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input type="text" name="channel" id="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur} />
        {formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default OldYoutubeForm
