import React from "react";
import ErrorMsg from "../components/error/ErrorMsg";
import Loading from "../components/loading/Loading";
import Search from "../components/search/Search";

const HomeView = () => {

    return (
        <div>
            <Search />
            <div>
                <ErrorMsg>errorMessage</ErrorMsg>
            </div>
            <Loading />
        </div>
    )
}

export default HomeView