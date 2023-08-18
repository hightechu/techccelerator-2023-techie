import { useNavigate } from 'react-router-dom';

const BackButtonWelcome = () => {

    const navigate = useNavigate();

    function GoToWelcome() {
        navigate("/");
    }

    return (
        <button className='btn btn-outline-secondary btn-lg pt-3 rounded-circle' onClick={GoToWelcome}>
            <span className="material-symbols-outlined">arrow_back</span>
        </button>
    );
}
 
export default BackButtonWelcome;
