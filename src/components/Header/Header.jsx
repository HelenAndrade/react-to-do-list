const Header = (props) => {
    const { userName } = props;
    return (
        <div>
            Bem-vindo(a), {userName}
        </div>
    );
};

export { Header };