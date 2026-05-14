import style from './TextBox.module.css'

const TextBox = (props) => {
    return (
        <input 
            type="text" 
            className={style.TextBox} 
            {...props}
        />
    );
};

export { TextBox };