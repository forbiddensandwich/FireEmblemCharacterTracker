import React from 'react'
import Nav from '../components/Nav'
import CharacterTable from '../components/CharacterTable'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Nav title={'Home'} />
            <CharacterTable />
            <Link to={'/create'}>Create a character</Link>
        </>
    )
}

export default Home