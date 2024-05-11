import React from 'react'
import Form from '../components/Form'
import Nav from '../components/Nav'

const Edit = () => {
    return (
        <>
            <Nav title={'Edit Character'} />
            <Form page={'edit'} />
        </>
    )
}

export default Edit