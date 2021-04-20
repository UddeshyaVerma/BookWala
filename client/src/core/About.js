import React from 'react';
import Layout from '../core/Layout';

const Home = () => {
    return (
        <Layout title="About" description="BookWala is a textbook selling and renting service which online prsence has been built with web designers and developers. The service promises the most competitive prices of books. This network provides faciltity of door to door delivery within short span of time.">
           
           <div style={{padding:"40px"}}   >
                <h3>WHY IT'S COOL</h3>
            <p>1. Your rental period is totally flexible.</p>
            <p>2. You have access to live costumer support.</p>
            <p>3. You can search by author, title, best-sellers.</p>
            </div>
                       
        </Layout>
           
    )
};

export default Home
