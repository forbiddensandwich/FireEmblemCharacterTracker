import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});
async function getAllCharacters() {
    return http.get('/myCharacters')
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}
async function updateOneCharacter(id, newCharacter) {
    return http.put(`/myCharacters/${id}`, newCharacter)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}
async function getOneCharacter(id) {
    return http.get(`/myCharacters/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}
function deleteHandler(id) {
    http.delete(`/myCharacters/${id}`)
        .then(res => res.data)
        .catch((err) => {
            throw err
        })
}
async function createCharacter(newCharacter) {
    http.post(`/myCharacters`, newCharacter)
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
            throw err;
        })
}

export {
    getAllCharacters,
    updateOneCharacter,
    getOneCharacter,
    createCharacter
}