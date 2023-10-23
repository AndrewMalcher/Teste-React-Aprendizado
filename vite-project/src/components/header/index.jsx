import React from "react";

function Header() {
    return (
        <div className="bg-teal-500 p-4 text-white">
            <div className="flex items-center">
                <h1 className="text-lg font-bold mr-4">Logo</h1>
                <div className="flex-grow"></div>
                <a href="#" className="mr-4">Página Inicial</a>
                <a href="#" className="mr-4">Sobre Nós</a>
                <a href="#">Contato</a>
                <button className="ml-4 bg-white text-teal-500 px-4 py-2 rounded-full hover:bg-teal-600">
                    Botão de Ação
                </button>
            </div>
        </div>
    );
}

export default Header;
