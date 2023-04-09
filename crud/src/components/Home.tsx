import { useEffect, useState } from "react"
import styles from "./Home.module.css"
import { IEmployee, PageEnum } from "./Employees.type";
import { EmployeeLIst } from "./EmployeeLIst";
import { Addemployee } from "./Addemployee";
import { EditEmployee } from "./EditEmployee";

export const Home = () => {

    const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
    const [shownPage, setShownPage] = useState(PageEnum.list)
    const [dataToEdit, setDataToEdit] = useState({} as IEmployee)

    useEffect(() => {
        const listInString = window.localStorage.getItem("EmployeeList")
        if (listInString) {
            setEmployeeList(JSON.parse(listInString))
        }
    }, [])

    const handleAddEmployeeClick = () => {
        setShownPage(PageEnum.add)
    }

    const showListPage = () => {
        setShownPage(PageEnum.list)
    }

    const _setEmployeeList = (list: IEmployee[]) => {
        setEmployeeList(list)
        window.localStorage.setItem("EmployeeList", JSON.stringify(list))
    }

    const addEmployee = (data: IEmployee) => [
        _setEmployeeList([...employeeList, data])
    ]

    const deleteEmployee = (data: IEmployee) => {
        const indexToDelete = employeeList.indexOf(data);
        const tempList = [...employeeList];
        tempList.splice(indexToDelete, 1)
        _setEmployeeList(tempList);
    }

    const editEmployeeData = (data: IEmployee) => {
        setShownPage(PageEnum.edit)
        setDataToEdit(data)
    }

    const updateData = (data: IEmployee) => {
        const filteredData = employeeList.filter(x => x.id === dataToEdit.id)[0];
        const indexOfRecord = employeeList.indexOf(filteredData);
        const tempData = [...employeeList]
        tempData[indexOfRecord] = data;
        setEmployeeList(tempData)
    }

    return (
        <>
            <article className={styles['article-header']}>
            </article>
            <section className={styles['section-content']}>
                {shownPage === PageEnum.list && (
                    <>
                        <EmployeeLIst
                            list={employeeList}
                            handleDeleteClick={deleteEmployee}
                            onEdit={editEmployeeData} 
                            addEmployeeBtn={handleAddEmployeeClick}/>
                    </>
                )}

                {shownPage === PageEnum.add && <Addemployee handleBackBtnClick={showListPage} handleSubmitClick={addEmployee} />}

                {shownPage === PageEnum.edit && <EditEmployee handleBackBtnClick={showListPage} data={dataToEdit} handleUpdateClick={updateData} />}
            </section>
        </>
    )
}
