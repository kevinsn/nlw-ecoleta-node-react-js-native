import React from 'react';

interface HeaderProps {
    title: string;
}

// : React.FC = declarando a tipagem da variável header
// FC = Componente escrito em formato de função (Generic)

const Header: React.FC <HeaderProps> = (props) => {
    return(
        <header>
            <h1>{props.title}</h1>
        </header>

    );
}

export default Header;