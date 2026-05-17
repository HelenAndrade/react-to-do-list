import { Outlet } from "react-router-dom";

import { Content, Footer, Header } from "../../components";

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <Content>
                <Outlet/>
            </Content>
            <Footer creator="Hélen Andrade" />
        </>
    );
}; 

export { DefaultLayout };