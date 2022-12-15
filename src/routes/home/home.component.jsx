import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

function Home() {
    return (
        <div>
            <Outlet />
            <Directory />
        </div>
    );
}

export default Home