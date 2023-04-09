import { useState } from "react";
import "./EmployeeLIst.css"
import { IEmployee } from "./Employees.type"
import { EmployeeModal } from "./EmployeeModal";
type Props = {
    list: IEmployee[];
    handleDeleteClick: (data: IEmployee) => void;
    onEdit: (data: IEmployee) => void,
    addEmployeeBtn: () => void
}

export const EmployeeLIst = ({ list, handleDeleteClick, onEdit, addEmployeeBtn }: Props) => {
    const [showModal, setShowModal] = useState(false)
    const [dataToShow, setDataToShow] = useState(null as IEmployee | null)

    const viewEmployee = (data: IEmployee) => {
        setDataToShow(data)
        setShowModal(!showModal)
    }

    const onCloseModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div className="employeeList">
            <article>
                <header className="header">
                    <div className="addEmployeeBtn">
                        <input type="button" value="Add Employee" onClick={addEmployeeBtn} />
                    </div>
                    <h3 className="list-header ">Employee List</h3>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {list.map(employee => {
                        return (
                            <tbody key={employee.id}>
                                <tr>
                                    <td>{`${employee.firstName} ${employee.lastName}`}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <div>
                                            <input type="button" value="View" onClick={() => viewEmployee(employee)} />
                                            <input type="button" value="Edit" onClick={() => onEdit(employee)} />
                                            <input type="button" value="Delete" onClick={() => handleDeleteClick(employee)} />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </article>
            {showModal && dataToShow && <EmployeeModal onClose={onCloseModal} data={dataToShow} />}
        </div>
    )
}
