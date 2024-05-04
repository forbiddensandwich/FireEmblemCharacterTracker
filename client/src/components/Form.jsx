import React, { useEffect, useState } from 'react';
import { createCharacter, getOneCharacter, updateOneCharacter } from '../services/CharacterService.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import {
    nameHandler, classHandler, levelHandler, internalLevelHandler,
    hpHandler, strHandler, defHandler, magHandler, resHandler, dexHandler,
    luckHandler, spdHandler
} from '../functions/FormFunctions.jsx';
const Form = (props) => {
    let { page } = props;
    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    let [formErrors, setFormErrors] = useState({
        name: "Character name is required",
        charClass: "Class is required",
        hp: "HP stat is required",
        str: "Str stat is required",
        def: "Def stat is required",
        mag: "Mag stat is required",
        res: "Res stat is required",
        dex: "Dex stat is required",
        luck: "Luck stat is required",
        spd: "Speed stat is required",
        internalLevel: "Internal Level is required",
        level: "Level is required"
    })

    const [name, setName] = useState("")
    const [charClass, setCharClass] = useState("")
    const [isMale, setIsMale] = useState(true)
    const [level, setLevel] = useState(0)
    const [internalLevel, setInternalLevel] = useState(0)
    const [hp, setHP] = useState(0)
    const [str, setStr] = useState(0)
    const [def, setDef] = useState(0)
    const [mag, setMag] = useState(0)
    const [res, setRes] = useState(0)
    const [dex, setDex] = useState(0)
    const [luck, setLuck] = useState(0)
    const [spd, setSpd] = useState(0)

    if (page == 'edit') {
        [formErrors, setFormErrors] = useState({
            name: "",
            charClass: "",
            hp: "",
            str: "",
            def: "",
            mag: "",
            res: "",
            dex: "",
            luck: "",
            spd: "",
            internalLevel: "",
            level: ""
        })
        useEffect(() => {
            getOneCharacter(id)
                .then((res) => {
                    console.log(res);
                    setName(res.name);
                    setCharClass(res.class);
                    setIsMale(res.isMale);
                    setLevel(res.level);
                    setInternalLevel(res.internalLevel);
                    setHP(res.hp);
                    setStr(res.str);
                    setDef(res.def);
                    setMag(res.mag);
                    setRes(res.res);
                    setDex(res.dex);
                    setLuck(res.luck);
                    setSpd(res.spd);
                })
                .catch((err) => {
                    console.log(err)
                })
        }, [])
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newCharacter = {
            name,
            class: charClass,
            level,
            internalLevel,
            isMale,
            hp,
            str,
            def,
            mag,
            res,
            dex,
            luck,
            spd
        }
        if (page == 'edit') {
            updateOneCharacter(id, newCharacter)
                .then((res) => {
                    console.log(res)
                    navigate('/')
                })
                .catch((err) => {
                    console.log('ERROR: ', err);
                    console.log('ERROR RESPONSE: ', err.response)
                    console.log('ERROR RESPONSE DATA: ', err.response.data)
                    console.log('ERROR RESPONSE DATA ERRORS: ', err.response.data.errors);
                    setErrors(err.response.data.errors)
                });
        }
        else {
            createCharacter(newCharacter)
                .then((res) => {
                    console.log(res)
                    navigate('/')
                })
                .catch((err) => {
                    console.log('ERROR: ', err);
                    console.log('ERROR RESPONSE: ', err.response)
                    console.log('ERROR RESPONSE DATA: ', err.response.data)
                    console.log('ERROR RESPONSE DATA ERRORS: ', err.response.data.errors);
                    setErrors(err.response.data.errors)
                });
        }
    }
    const validateForm = () => {
        console.log(Object.values(formErrors))
        return Object.values(formErrors).every(value => value === '')
    }
    return (
        <>
            <form className='w-50 mx-auto'
                onSubmit={submitHandler}
            >
                <div>
                    <label className='form-label'>Unit's Name: </label>
                    <input className='form-control'
                        type="text"
                        onChange={(e) => nameHandler(e, setFormErrors, formErrors, setName)}
                        value={name}
                    />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.name}</p>
                            :
                            null
                    }
                    {
                        errors.name ?
                            <p className='text-danger'>{errors.name.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Class: </label>
                    <input className='form-control'
                        type="text"
                        onChange={(e) => classHandler(e, setFormErrors, formErrors, setCharClass)}
                        value={charClass}
                    />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.charClass}</p>
                            :
                            null
                    }
                    {
                        errors.number ?
                            <p className='text-danger'>{errors.charClass.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Level: </label>
                    <input className='form-control'
                        type="text"
                        onChange={(e) => levelHandler(e, setFormErrors, formErrors, setLevel)}
                        value={level} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.level}</p>
                            :
                            null
                    }
                    {
                        errors.number ?
                            <p className='text-danger'>{errors.level.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Internal Level: </label>
                    <input className='form-control'
                        type="text"
                        onChange={(e) => internalLevelHandler(e, setFormErrors, formErrors, setInternalLevel)}
                        value={internalLevel} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.internalLevel}</p>
                            :
                            null
                    }
                    {
                        errors.internalLevel ?
                            <p className='text-danger'>{errors.internalLevel.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Gender: {isMale ? "Male" : "Female"}</label>
                    <input className='form-control'
                        type="checkbox"
                        onChange={() => setIsMale(!isMale)}
                        checked={isMale} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.isMale}</p>
                            :
                            null
                    }
                    {
                        errors.isMale ?
                            <p className='text-danger'>{errors.isMale.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>HP: </label>
                    <input className='form-control'
                        type="text"
                        onChange={(e) => hpHandler(e, setFormErrors, formErrors, setHP)}
                        value={hp} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.hp}</p>
                            :
                            null
                    }
                    {
                        errors.hp ?
                            <p className='text-danger'>{errors.hp.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Str: </label>
                    <input className='form-control'
                        type="text"
                        onChange={(e) => strHandler(e, setFormErrors, formErrors, setStr)}
                        value={str} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.str}</p>
                            :
                            null
                    }
                    {
                        errors.str ?
                            <p className='text-danger'>{errors.str.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Def: </label>
                    <input className='form-control'
                        type="text"
                        onChange={(e) => defHandler(e, setFormErrors, formErrors, setDef)}
                        value={def} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.def}</p>
                            :
                            null
                    }
                    {
                        errors.def ?
                            <p className='text-danger'>{errors.def.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Mag: </label>
                    <input className='form-control'
                        type="text"
                        onChange={(e) => magHandler(e, setFormErrors, formErrors, setMag)}
                        value={mag} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.mag}</p>
                            :
                            null
                    }
                    {
                        errors.mag ?
                            <p className='text-danger'>{errors.mag.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Res: </label>
                    <input className='form-control'
                        type="text"
                        onChange={(e) => resHandler(e, setFormErrors, formErrors, setRes)}
                        value={res} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.res}</p>
                            :
                            null
                    }
                    {
                        errors.number ?
                            <p className='text-danger'>{errors.res.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Dex: </label>
                    <input className='form-control'
                        type="text"
                        onChange={(e) => dexHandler(e, setFormErrors, formErrors, setDex)}
                        value={dex} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.dex}</p>
                            :
                            null
                    }
                    {
                        errors.dex ?
                            <p className='text-danger'>{errors.dex.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Luck: </label>
                    <input className='form-control'
                        type="text"
                        onChange={(e) => luckHandler(e, setFormErrors, formErrors, setLuck)}
                        value={luck} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.luck}</p>
                            :
                            null
                    }
                    {
                        errors.luck ?
                            <p className='text-danger'>{errors.luck.message}</p>
                            :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Spd: </label>
                    <input className='form-control'
                        type="text"
                        onChange={(e) => spdHandler(e, setFormErrors, formErrors, setSpd)}
                        value={spd} />
                    {
                        formErrors ?
                            <p className='text-danger'>{formErrors.spd}</p>
                            :
                            null
                    }
                    {
                        errors.spd ?
                            <p className='text-danger'>{errors.spd.message}</p>
                            :
                            null
                    }
                </div>
                <button type='submit' disabled={!validateForm()}>Submit</button>
            </form>
        </>
    )
}

export default Form