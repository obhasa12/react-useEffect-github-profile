import { useState } from "react";

const ProfileSearchForm = ({ tombol }) => {
    const [term, setTerm] = useState("");

    function handleChange(e) {
        setTerm(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        tombol(term);
        setTerm("")
    }

    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <input value={term} onChange={handleChange}/>
                <button>Search!</button>
            </form>
        </div>
    );
        
}
 
export default ProfileSearchForm;