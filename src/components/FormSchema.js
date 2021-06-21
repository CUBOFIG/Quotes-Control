import * as Yup from 'yup'

const initialValues = { year: '', mark:'', plan:''}

const validationSchema = Yup.object().shape({
  year: Yup.number()
  .min(4)
  .required("Ingrese el año"),

  mark: Yup.string()
  .min(5)
  .required("Ingrese la Marca"),
  
  plan:Yup.string().required("Ingrese el tipo de Plan")

})

export { initialValues, validationSchema }
