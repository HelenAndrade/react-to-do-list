import { Outlet } from "react-router-dom";

import { Content, Footer, Header } from "../../components";
import { useAppContext } from "../../hooks";

const DefaultLayout = () => {
    const { creator } = useAppContext();

    return (
        <>
            <Header />
            <Content>
                <Outlet/>
            </Content>
            <Footer creator={creator} />
        </>
    );
}; 

export { DefaultLayout };