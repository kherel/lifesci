import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Subscribe')
import SimpleForm from 'HOC/SimpleForm';
import A_Button from 'A_Button'
import A_Container from "A_Container";
import A_H from 'A_H'
import A_P from 'A_P'
import A_InputText from 'A_InputText'

const config = {
  fieldNames: ['email'],
  validations: {
    email: ['required', 'email'],
  }
}

const Subscribe = ({fields, formHasErrors, onFieldChange, handleSubmit}) =>{

  const fieldName = config.fieldNames[0]
  console.log(fields[fieldName])
  return(
    <section className={cn()}>
      <A_Container type='normal' mx={cn('inner')} >
        <A_H type='second' mx={cn('second')}>Interested in hearing more about Lifesci?</A_H>
        <A_P type='second' mx={cn('text')}>Get a newsletter with all latest news and updates delivered right into your inbox.</A_P>

        <form onSubmit={handleSubmit} className={cn('form')}>

          <A_InputText
            value = {fields[fieldName].value}
            type = 'text'
            label = 'Email'
            handleChange = { text => onFieldChange(fieldName, text) }
            mx={cn('input')}
            error={fields[fieldName].error}
          />

          <A_Button btnType='submit' type='button-primary' mx={cn('btn')}>Subscribe me</A_Button>
        </form>
      </A_Container>
    </section>

  )
}

Subscribe.propTypes = {
};

Subscribe.defaultProps = {
}

export default SimpleForm(Subscribe, config)