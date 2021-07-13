import React, { useState } from 'react'
import Swal from 'sweetalert2';

export const SurveyForm = () => {

    const [dissatisfaction, setDissatisfaction] = useState('Mal');
    const [normal, setNormal] = useState('Normal');
    const [satisfaction, setSatisfaction] = useState('Excelente');

    const handleDissatisfaction = (e) => {
        e.preventDefault()
        setDissatisfaction(dissatisfaction);
        console.log(dissatisfaction)
         
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Muchas gracias por tu tiempo',
        showConfirmButton: false,
        timer: 1500
    })
    }

    const handleNormal = (e) => {
        e.preventDefault()
        setNormal(normal)
        console.log(normal);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Muchas gracias por tu tiempo',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const handleSatisfaction = (e) => {
        e.preventDefault();
        setSatisfaction(satisfaction);
        console.log(satisfaction)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Muchas gracias por tu tiempo',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
    <div className="auth__main">
        <div className="auth__box-container">
        <img src="https://res.cloudinary.com/dwk5wkuhd/image/upload/v1626207812/car_wbnwgm.png" alt="Car" className="img-car"/>

        <br />
        <hr />
        <br />

        <h3 className="auth__title">PLANTA VITALIZADORA DEL GOLFO, S.A DE C.V.</h3>
        <h4 className="auth__title">¡Tu opinion nos importa!</h4>
        <h4 className="auth__title">¿Nos recomendarías con tus familiares o amigos?</h4>
        <label className="auth__label-left">Insatisfecho</label>
        <label className="auth__label-right">Satisfecho</label>
            
        <form className="auth__form">

        <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={ handleDissatisfaction }
        >
        0
        </button>
        <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={ handleDissatisfaction }
        >
        1
        </button>
        <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={ handleDissatisfaction }
        >
        2
        </button>
        <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={ handleDissatisfaction }

        >
        3
        </button>
        <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={ handleDissatisfaction }

        >
        4
        </button>
        <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={ handleDissatisfaction }

        >
        5
        </button>
        <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={ handleDissatisfaction }

        >
        6
        </button>
        <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={ handleNormal }
        >
        7
        </button>
        <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={ handleNormal }
        >
        8
        </button>
        <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={ handleSatisfaction }
        >
        9
        </button>
        <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={ handleSatisfaction }
        >
        10
        </button>
        </form>

        <br/>
        <h5 className="auth__title">
            Nuestro aviso de privacidad lo puedes encontrar 
                <span>
                < a 
                    href="http://www.plantavitalizadora.com/Images/Aviso%20de%20Privacidad.pdf" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="auth__span"
                > aquí
                </a>
                </span>
            </h5> 
        <br />
    </div>
</div>
)};