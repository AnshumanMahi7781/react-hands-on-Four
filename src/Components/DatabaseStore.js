import React, { createContext, useState } from 'react'


export const storeData = createContext();
function DatabaseStore(props) {
    let count= 0
    const [stuDetails, setStuDetails] = useState([{
        stuID: count++,
        stuName: "Mahi",
        stuAge: 21,
        stuCourse: 'Frontend',
        stuBatch: "March",
    },
    {
        stuID: count++,
        stuName: "Anuj",
        stuAge: 23,
        stuCourse: 'AI/ML',
        stuBatch: "August",
    },
    {
        stuID: count++,
        stuName: "Saptarsi",
        stuAge: 22,
        stuCourse: 'MERN',
        stuBatch: "June",
    },
    ]);

    return (
        <storeData.Provider value={{ stuDetails, setStuDetails, count }}>
        {props.children}
        </storeData.Provider>

    )
}

export default DatabaseStore
