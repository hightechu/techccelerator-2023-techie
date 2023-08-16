import { useNavigate } from 'react-router-dom';

const BackButtonWelcome = () => {

    const navigate = useNavigate();

    function GoToWelcome() {
        navigate("/");
    }

    return (
        <button className='back-btn-welcome' onClick={GoToWelcome}>
            <span className="material-symbols-outlined">arrow_back</span>
        </button>
    );
}
 
export default BackButtonWelcome;
