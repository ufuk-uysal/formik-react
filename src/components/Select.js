import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import Select from 'react-select'

function Select2 (props) {
  const { label, name, defaultValue ,options, ...rest } = props
  console.log(props)

  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>

      <Field name={name} >

        {({form, field }) => { 
                 const { setFieldValue } = form
                 const  { value  }  = field
                   
                 return (
                  <Select 
                     id={name}
                     {...field}
                     {...rest}
                     onChange={val => setFieldValue(name,val)}
                     options={options}
                  />
                 )
            }
        }


      </Field>

      {/* <Select options={options} /> */}
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Select2
