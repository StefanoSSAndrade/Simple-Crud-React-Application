import { useState } from "react"
import styles from "./Home.module.css"
import { IEmployee, PageEnum, stevonEmployeeList } from "./Employees.type";
import { EmployeeLIst } from "./EmployeeLIst";
import { Addemployee } from "./Addemployee";
import { EditEmployee } from "./EditEmployee";

export const Home = () => {

    const [employeeList, setEmployeeList] = useState(stevonEmployeeList as IEmployee[]);
    const [shownPage, setShownPage] = useState(PageEnum.list)
    // const [dataToEdit, setDataToEdit] = useState({} as IEmployee)
    const [dataToEdit, setDataToEdit] = useState({} as IEmployee)

    const handleAddEmployeeClick = () => {
        setShownPage(PageEnum.add)
    }

    const showListPage = () => {
        setShownPage(PageEnum.list)
    }

    const addEmployee = (data: IEmployee) => [
        setEmployeeList([...employeeList, data])
    ]

    const deleteEmployee = (data: IEmployee) => {
        const indexToDelete = employeeList.indexOf(data);
        const tempList = [...employeeList];
        tempList.splice(indexToDelete, 1)
        setEmployeeList(tempList);
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
                <header>
                    <h1>React : Simple Crud Application</h1>
                </header>
            </article>

            <section className={styles['section-content']}>
                {shownPage === PageEnum.list && (
                    <>
                        <input
                            type="button" value="Add Employee" onClick={handleAddEmployeeClick}
                            className={styles["add-employee"]} />
                        <EmployeeLIst
                            list={employeeList}
                            handleDeleteClick={deleteEmployee}
                            onEdit={editEmployeeData} />
                    </>
                )}

                {shownPage === PageEnum.add && <Addemployee handleBackBtnClick={showListPage} handleSubmitClick={addEmployee} />}

                {shownPage === PageEnum.edit && <EditEmployee handleBackBtnClick={showListPage} data={dataToEdit} handleUpdateClick={updateData} />}
            </section>
        </>
    )
}
