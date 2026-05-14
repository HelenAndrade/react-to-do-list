import style from './Footer.module.css'

const Footer = (props) => {
    const actualYear = new Date().getFullYear();

    const { creator } = props;
    return (
        <div className={style.Footer}>
            <h1>
                React Básico - {actualYear} - {creator}
            </h1>
        </div>
    );
};

export { Footer };