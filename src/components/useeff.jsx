import React, { useEffect } from 'react';
import { Formik, Field, FieldArray, Form, ErrorMessage } from 'formik';

const MyForm = () => {
    useEffect(() => {
        const initialInputs = Array.from({ length: 10 }, () => '');
        setValues({ inputs: initialInputs });
      }, []);

  return (
    <Formik
      initialValues={{
        inputs: [], // This will hold the input values
      }}
      onSubmit={values => {
        console.log(values.inputs);
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="inputs">
            {({ push }) => (
              <div>
                {values.inputs.map((_, index) => (
                  <div key={index}>
                    <Field name={`inputs.${index}`} />
                    <button type="button" onClick={() => push('')}>
                      Add
                    </button>
                    <ErrorMessage name={`inputs.${index}`} component="div" />
                  </div>
                ))}
              </div>
            )}
          </FieldArray>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;