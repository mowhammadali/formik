import React from 'react';
import {Routes , Route, Navigate } from 'react-router-dom';

// styles
import { ThemeProvider } from 'styled-components';
import { primay } from './styles/Theme/Theme';

// components
import SignUp from './Components/SignUp';
import Login from './Components/Login';

const App = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={primay}>
                <Routes>
                    <Route path='/' element={<SignUp />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='*' element={<Navigate to="/" replace/>}/>
                </Routes>
            </ThemeProvider>
        </React.Fragment>
    );
};

export default App;