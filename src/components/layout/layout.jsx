import {Fragment} from "react";
import MainNavigation from "@/components/layout/main-navigation";


const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation/>
            <main>{props.children}</main>
        </Fragment>
    );
};

export default Layout;
