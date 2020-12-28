import {useState} from 'react';
// @ts-ignore
const useForm= (callback) => {

    const [values, setValues] = useState({});
    // @ts-ignore
    const handleSubmit = (event) => {
        if(event) event.preventDefault();
        callback();
    }
    // @ts-ignore
    const handleChange = (event) => {
        event.persist();
        setValues( values => ({...values, [event.target.name]: event.target.value}))
    }

    return{
        handleChange,
        handleSubmit,
        values,
    }
}
export default useForm;
