import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

// ctrl + p: open and search file by name

function IndexPractice() {
    
    const [data, setData] = useState([]); // destructuring also
    const [filter, setFilter] = useState("");
    const [programFilter, setProgramFilter] = useState("");

    const filteredData = useMemo(()=> {
        if(filter.length === 0 && programFilter.length === 0) return data;

        return data.filter((student) => {
            const condition = (student.name.toLowerCase().includes(filter.toLowerCase()) || student.nim.includes(filter.toLowerCase()) || programFilter.length!=0 && student.studyProgram === programFilter);

            return condition;
        });
    }, [data, filter, programFilter]); // tujuannya biar bisa diupdate sekalian

    const programList = useMemo(() => {
        const list = data.map((student)=>student.studyProgram);
        return [...new Set(list)];
    }, [data]);

    const fetchData = async () => {
        const {data : studentData} = await axios.get('/students.json'); // destructuring

        setData(studentData);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }

    const handleProgramChange = (e) => {
        setProgramFilter(e.target.value);
    }

    // useEffect(() => {
    //     console.log("Filter here: ", filter);
    // }, {filter});
    
    useEffect(() => {
        fetchData();

        return () => {
            console.log("Component unmounted");
        }
    }, []);

    return (
    <div>
        <h1>List of Future Accomplices</h1>
        <input type="text" value={filter} onChange={handleFilterChange}/>
        <select onChange={handleProgramChange}>
            <option value={""}></option>
            {
                programList.map((program, i) => {
                    return (<option value={program} key={i}>{program}</option>)
                })
            }
        </select>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>NIM</th>
                    <th>Study Program</th>
                    <th>Additional Data</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredData.map((student, i)=>{
                        return (
                            <tr key={i}>
                                <td>{student.name}</td>
                                <td>{student.nim}</td>
                                <td>{student.studyProgram}</td>
                                <td>{student.additionalData? JSON.stringify(student.additionalData) : ""}</td>
                                <td>
                                    <button>View</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </div>)
}

export default IndexPractice;