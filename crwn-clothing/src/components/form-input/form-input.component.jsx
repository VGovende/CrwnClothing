import './form-input.styles.scss';

const FormInput = ({label, ...otherProps}) => {
    return(
        <div className = "group">
            { label && (
                <label 
                    className={`${otherProps.value.length ? 'shrink' : null} form-input-label`}>{label}</label>
            )}
            <input class="form-input"{...otherProps}/>
        </div>
    );
}

export default FormInput;