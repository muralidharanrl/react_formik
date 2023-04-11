import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import TextError from './TextError'

const initialValues = {
  name: 'Muralidharan',
  email: '',
  channel: '',
  comments: '',
  social: {
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['',''],
  gender: '',
  category: ''
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

const YoutubeForm = () => {

    
  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      <Form>
        <div className="form-control">
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" id="name" />
        <ErrorMessage name='name' component={TextError} />
        </div>

        <div className="form-control">
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" id="email" />
        <ErrorMessage name='email' component={TextError}/>
        </div>

        <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <Field type="text" name="channel" id="channel" />
        <ErrorMessage name='channel' component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh">Primary Phone Number</label>
          <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
        </div>

        <div className="form-control">
          <label htmlFor="secondaryPh">Secondary Phone Number</label>
          <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
        </div>

        <div className="form-control">
          <label htmlFor="gender">Gender</label>
          <Field as="select" name="gender" id="gender">
          <option value="">Select a gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          </Field>
          
        </div>

        <div className="form-control">
          <label htmlFor="category">Category</label>
          <div role='group' aria-labelledby='category'>
            <label>
              <Field type="radio" value="tech" name="category" />
              Tech
            </label>
            <label>
              <Field type="radio" value="education" name="category" />
              Education
            </label>
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comment</label>
          <Field as="textarea" name="comments" id="comments" />
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm
