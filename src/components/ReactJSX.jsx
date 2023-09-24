import React from 'react';

const kelompok = {
    nomor: 'Kelompok 6',
    shift: 'Shift 1'
};

function greetings(kelompok) {
    return kelompok.nomor + ' ' + kelompok.shift;
}

//menggunakan JSX
const ReactJSX = () => {
    return (
        <div>
            <h1>Praktikum RPLBK - Modul 2</h1>
            <h2> {greetings(kelompok)}</h2>
        </div>
    );
}

// //tidak menggunakan JSX
// const ReactNoJSX = () => {
//     return React.createElement('div', null,
//         React.createElement('h1', null, 'Halo Praktikan hehe'),
//         React.createElement('h2', null, 'Nama saya ', greetings(kelompok)),
//         React.createElement('p', { style: { color: '#ff0000' } }, 'ini   adalah contoh tanpa JSX')
//     )
// }
export default ReactJSX;
// export { ReactNoJSX };
