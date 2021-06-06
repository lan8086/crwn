import { render } from '@testing-library/react';
import React from 'react';
import Directpry from '../../components/directory/directory.component';

import './homepage.styles.scss';

const Homepage = () => (
    <div className="homepage"> 
        <Directpry />
    </div>
)

export default Homepage