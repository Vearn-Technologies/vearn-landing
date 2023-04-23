import React from "react";
import Layout from "components/Layout";
import ComingSoon from "components/ComingSoon";

const Home = () => {
    return (
        <Layout title="Home">
            <ComingSoon />
        </Layout>
    );
};

Home.title = "Home";

export default Home;
