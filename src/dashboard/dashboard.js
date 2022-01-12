import React, { useState, useEffect, useRef } from 'react'
import DocumentTitle from 'react-document-title';
import { Accordion, Table, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import "./dashboard.scss";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const [userId, setUserId] = useState(null)
    const [semesterSelected, setSemesterSelected] = useState(null)
    const [userDetails, setUserDetails] = useState({})
    const [semesterData, setSemisterData] = useState({})
    const [semesterMetaData, setSemesterMetaData] = useState(null)
    const [userCgpa, setUserCgpa] = useState(null)
    const [userMetaData, setUserMetaData] = useState({})
    const [updateClicked, setUpdateClicked] = useState(false)
    let navigate = useNavigate()

    const SemesterOptions = [
        { label: "Semester 1", value: "Semester1" },
        { label: "Semester 2", value: "Semester2" },
        { label: "Semester 3", value: "Semester3" },
        { label: "Semester 4", value: "Semester4" },
        { label: "Semester 5", value: "Semester5" },
        { label: "Semester 6", value: "Semester6" },
        { label: "Semester 7", value: "Semester7" },
        { label: "Semester 8", value: "Semester8" },
    ]

    const inputRefSgpa = useRef(null);
    const inputRefCgpa = useRef(null);
    const printDocument = (ref) => {
        html2canvas(ref.current, {
            useCORS: true,
            allowTaint: true,
            scrollY: -window.scrollY,
            dpi: 1200
        }).then(canvas => {
            const image = canvas.toDataURL('image/jpeg', 100);
            const doc = new jsPDF('l', 'px', 'a4');
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();

            const widthRatio = pageWidth / canvas.width;
            const heightRatio = pageHeight / canvas.height;
            const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

            const canvasWidth = (canvas.width - 20) * ratio;
            const canvasHeight = (canvas.height - 20) * ratio;

            const marginX = (pageWidth - canvasWidth) / 2;
            const marginY = (pageHeight - canvasHeight) / 2;

            doc.addImage(image, 'JPEG', marginX, marginY, canvasWidth, canvasHeight);
            doc.output('dataurlnewwindow');
        });
    };


    const getGradePoint = (marks) => {
        if (marks >= 90) {
            return 10;
        } else if (marks < 90 && marks >= 80) {
            return 9;
        } else if (marks < 80 && marks >= 70) {
            return 8;
        } else if (marks < 70 && marks >= 60) {
            return 7;
        } else if (marks < 60 && marks >= 50) {
            return 6;
        } else if (marks < 50 && marks >= 45) {
            return 5;
        } else if (marks < 45 && marks >= 40) {
            return 4;
        } else {
            return 0;
        }
    }


    const getMetaData = (semData) => {
        let sum = 0
        let totalCredits = 0
        Object.keys(semData).map(item => {
            const marks = semData[item].marks === "" ? 0 : parseFloat(semData[item].marks)
            const credit = semData[item].credit === "" ? 0 : parseFloat(semData[item].credit)
            const gradePoint = getGradePoint(marks)
            sum += credit * gradePoint
            totalCredits += credit
        })
        const sgpa = sum > 0 ? (sum / totalCredits).toFixed(2) : 0

        const percentage = sgpa ? ((sgpa - 0.75) * 10).toFixed(2) : 0
        return { sgpa: String(sgpa), percentage: String(percentage) }
    }

    const handleUpdate = () => {
        setUserDetails((previousState) => ({
            ...previousState,
            [semesterSelected.value]: semesterData
        }))
        setUpdateClicked(true)
        setUserMetaData((previousState) => ({
            ...previousState,
            [semesterSelected.value]: semesterMetaData
        }))
    }

    const handleClickAdd = () => {
        const subCount = Object.keys(semesterData).length + 1
        setSemisterData((previousState) => ({
            ...previousState,
            [subCount]: {
                "subjectCode": "",
                "credit": "",
                "marks": ""
            }
        }))
    }

    const handleClickMinus = () => {
        const subCount = Object.keys(semesterData).length - 1
        if (subCount === 0) {
            setSemisterData({
                "1": {
                    "subjectCode": "",
                    "credit": "",
                    "marks": ""
                }
            })
        } else {
            setSemisterData((previousState) => {
                const newData = { ...previousState }
                delete newData[Object.keys(semesterData)[subCount]]
                return newData;
            })
        }
    }


    useEffect(() => {
        setSemesterMetaData(getMetaData(semesterData))
    }, [semesterData])

    const updateUserDetails = () => {
        const userDetails = JSON.parse(localStorage.getItem(userId))
        let userMetaData = JSON.parse(localStorage.getItem(userId + "MetaData"))
        if (userDetails !== null) {
            setUserDetails(userDetails)
        }

        if (userMetaData !== null) {
            ["Semester1", "Semester2", "Semester3", "Semester4",
                "Semester5", "Semester6", "Semester7", "Semester8"].map(item => {
                    userMetaData[item] = userMetaData[item] ? userMetaData[item] : { sgpa: "", percentage: "" }
                })

            setUserMetaData(userMetaData)
        } else {
            setUserMetaData({
                Semester1: { sgpa: "", percentage: "" },
                Semester2: { sgpa: "", percentage: "" },
                Semester3: { sgpa: "", percentage: "" },
                Semester4: { sgpa: "", percentage: "" },
                Semester5: { sgpa: "", percentage: "" },
                Semester6: { sgpa: "", percentage: "" },
                Semester7: { sgpa: "", percentage: "" },
                Semester8: { sgpa: "", percentage: "" },
            })
        }
    }

    const handleOnChangeValueSemester = (subject, id, value) => {
        setSemisterData((previousState) => ({
            ...previousState,
            [subject]: {
                ...previousState[subject],
                [id]: value
            }
        }))
    }

    const handleOnChangeValueCgpa = (semester, id, value) => {
        setUserMetaData((previousState) => ({
            ...previousState,
            [semester]: {
                ...previousState[semester],
                [id]: value,
                percentage: ((value - 0.75) * 10).toFixed(2)
            }
        }))
    }

    useEffect(() => {
        if (userMetaData !== null) {
            let sum = 0
            let count = 0
            Object.keys(userMetaData).map(semester => {
                if (userMetaData[semester].sgpa !== "") {
                    sum += parseFloat(userMetaData[semester].sgpa)
                    count++;
                }
            })

            const cgpa = sum > 0 ? (sum / count).toFixed(2) : 0
            const percentage = cgpa > 0 ? ((cgpa - 0.75) * 10).toFixed(2) : 0
            setUserCgpa({ cgpa: cgpa, percentage: percentage })
        }

    }, [userMetaData])

    useEffect(() => {
        if (semesterSelected !== null) {
            setSemisterData(userDetails[semesterSelected.value] ? userDetails[semesterSelected.value] : {
                "1": {
                    "subjectCode": "",
                    "credit": "",
                    "marks": ""
                }
            })
        }
    }, [semesterSelected])

    useEffect(() => {
        updateUserDetails()
    }, [userId])

    useEffect(() => {
        if (userId !== null) {
            localStorage.setItem(userId, JSON.stringify(userDetails))
        }

    }, [userDetails])

    useEffect(() => {
        if (userId !== null && updateClicked === true) {
            setUpdateClicked(false)
            localStorage.setItem(userId + "MetaData", JSON.stringify(userMetaData))
        }
        

    }, [updateClicked])


    useEffect(() => {
        const userID = localStorage.getItem("loginUserData")
        setUserId(userID)
        
    }, [])


    return (
        <DocumentTitle title='Dashboard'>
            <div className='dashboard'>
                <h1 className='title'>SGPA & CGPA Notes</h1>
                <div className='row'>
                    <div className='col-12' >
                    <Button
                        className="logout"
                        id="download"
                        onClick={() => {                            
                            navigate("/login")
                            
                        }}
                    >
                        Logout
                    </Button>
                    </div>
                    
                </div>

                <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header >SGPA</Accordion.Header>
                        <Accordion.Body>
                            <div className='row'>
                                <Select
                                    className="m-b-20"
                                    placeholder="Select Semester"
                                    value={semesterSelected}
                                    onChange={(selecetd) => setSemesterSelected(selecetd)}
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary: '#0000000',
                                        },
                                    })}
                                    options={SemesterOptions}
                                />
                            </div>

                            {Object.keys(semesterData).length === 0 ? null :
                                <>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <i className="fas fa-plus-circle "
                                                onClick={handleClickAdd}>
                                            </i>
                                            <i className="fas fa-minus-circle "
                                                onClick={handleClickMinus}>
                                            </i>
                                        </div>

                                        <div className='semester_table'>
                                            <Table bordered hover ref={inputRefSgpa}>
                                                <thead>
                                                    <tr>
                                                        <th className="text-center" colSpan={4}>
                                                            {`SGPA Report - ${semesterSelected.label}`}</th>

                                                    </tr>
                                                    <tr>
                                                        <th>Sl. No.</th>
                                                        <th>Subject Code          </th>
                                                        <th>Credits  </th>
                                                        <th>Marks  </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        Object.keys(semesterData).map((subject, index) => (
                                                            <tr key={subject}>
                                                                <td>{index + 1}</td>
                                                                {Object.keys(semesterData[subject]).map(item => (
                                                                    <td key={`${subject}_${item}`}>
                                                                        <Form.Control
                                                                            type={(item === "subjectCode") ? "text" : "number"}
                                                                            id={`${subject}_${item}`}
                                                                            value={semesterData[subject][item]}
                                                                            onChange={(event) => handleOnChangeValueSemester(subject, item, event.target.value)}
                                                                        />
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))
                                                    }
                                                    {semesterMetaData === null ? null :
                                                        <>
                                                            <tr>
                                                                <td className="text-center" colSpan={3}>Total SGPA</td>
                                                                <td>{semesterMetaData.sgpa}</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="text-center" colSpan={3}>Total Percentage</td>
                                                                <td>{semesterMetaData.percentage}</td>

                                                            </tr>
                                                        </>
                                                    }

                                                </tbody>
                                            </Table>

                                        </div>
                                        <div className='controls row'>
                                            <div className='col-lg-1'>
                                                <Button
                                                    id="update"
                                                    onClick={handleUpdate}
                                                >
                                                    Update
                                                </Button>
                                            </div>
                                            <div className='col-lg-3'>
                                                <Button
                                                    id="download"
                                                    onClick={() => printDocument(inputRefSgpa)}
                                                >
                                                    Download Report
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header onClick={updateUserDetails}>CGPA</Accordion.Header>
                        <Accordion.Body>
                            <div className='row'>
                                {Object.keys(userMetaData).length === 0 ? null :
                                    <>
                                        <div className='semester_table'>
                                            <Table bordered hover ref={inputRefCgpa}>
                                                <thead>
                                                    <tr>
                                                        <th className="text-center" colSpan={4}>
                                                            {`CGPA Report`}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Semester</th>
                                                        <th>SGPA</th>
                                                        <th>Percentage</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        Object.keys(userMetaData).map((semester, index) => (
                                                            <tr key={semester}>
                                                                <td>{index + 1}</td>
                                                                {Object.keys(userMetaData[semester]).map(item => (
                                                                    <td key={`${semester}_${item}`}>
                                                                        {console.log(item)}
                                                                        <Form.Control
                                                                            readOnly={item === "sgpa" ? false : true}
                                                                            type={(item === "subjectCode") ? "text" : "number"}
                                                                            id={`${semester}_${item}`}
                                                                            value={userMetaData[semester][item]}
                                                                            onChange={(event) => handleOnChangeValueCgpa(semester, item, event.target.value)}
                                                                        />
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))
                                                    }
                                                    {userCgpa === null ? null :
                                                        <>
                                                            <tr>
                                                                <td className="text-center" colSpan={2}>Total CGPA</td>
                                                                <td>{userCgpa.cgpa}</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="text-center" colSpan={2}>Total Percentage</td>
                                                                <td>{userCgpa.percentage}</td>
                                                            </tr>
                                                        </>
                                                    }

                                                </tbody>
                                            </Table>

                                        </div>
                                        <div className='controls row'>
                                            <div className='col-lg-3'>
                                                <Button
                                                    id="download"
                                                    onClick={() => printDocument(inputRefCgpa)}
                                                >
                                                    Download Report
                                                </Button>
                                            </div>
                                        </div>
                                    </>}
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </DocumentTitle>
    )
}
