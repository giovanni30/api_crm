import React from 'react';
import { Formik, Form, Field } from 'formik';
import { navigate } from 'gatsby';
import * as Yup from "yup";
import Alert from "./alerta";
import Spinner from "../components/spinner"

const SignUpForm = ({ cliente, cargando }) => {
    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo')
            .required('El nombre del cliente es Obligatorio'),
        email: Yup.string()
            .email('Email no válido')
            .required('El correo del cliente es Obligatorio'),
        telefono: Yup.number()
            .positive('Número no válido')
            .integer('Número no válido')
            .typeError('Número no válido')

    })

    const handleSubmit = async (valores) => {
        // console.log(valores);
        try {
            let respuesta
            if(cliente.id) {
                // Editando registro
                const url = `${process.env.GATSBY_API_URL}/${cliente.id}`
                respuesta = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                    
                })
                navigate('/clientes')
                
            }else {
                // Creando registro
                const url = process.env.GATSBY_API_URL
                respuesta = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
    
                navigate('/agradecimiento')
            }
            await respuesta.json()
            

        } catch (error) {
            console.error(error);

        }

    }


    return (

    <div>
        <Formik
            initialValues={{
                nombre: cliente?.nombre ?? "",
                telefono: cliente?.telefono ?? "",
                email: cliente?.email ?? "",
            }}
            enableReinitialize={true}
            onSubmit={ async (values, { resetForm }) => {
                await handleSubmit(values)
                resetForm()
            }}
            validationSchema={nuevoClienteSchema}
        >

            {({ errors, touched }) => {
                //  console.log(touched);

                return (

                    cargando ? <Spinner /> : (


                        <Form className="text-center bg-teal-800 py-10">
                            {errors.nombre && touched.nombre ? (
                                <Alert> {errors.nombre}</Alert>
                            ) : null}
                            {errors.email && touched.email ? (
                                <Alert> {errors.email}</Alert>
                            ) : null}
                            {errors.telefono && touched.telefono ? (
                                <Alert> {errors.telefono}</Alert>
                            ) : null}
                            <h2 className="text-white py-7 text-5xl font-bold">{cliente?.nombre ? 'Editar Cita del Cliente' : '¡Agenda una cita!'}</h2>
                            <Field id="nombre" type="text" className="py-8 px-8 m-3" name="nombre" placeholder="Nombre y Apellido" />
                            <Field id="email" type="email" className="py-8 px-8 m-3" name="email" placeholder="Email" />
                            <Field id="telefono" type="tel" className="py-8 px-8 m-3" name="telefono" placeholder="Telefono" />
                            <input type="submit" value="Agendar" className="py-8 px-20 m-3 bg-orange-700 hover:bg-orange-600 transition-colors rounded-lg text-white cursor-pointer uppercase font-bold" />
                        </Form>

                    )
                )
            }}
        </Formik>
    </div>
    ) 
}

SignUpForm.defaultProps = {
    cliente: {},
    cargando: false
}

export default SignUpForm;