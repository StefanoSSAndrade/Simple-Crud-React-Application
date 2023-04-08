import { ChangeEvent, useState } from "react"
import styles from "./Addemployee.module.css"
import { IEmployee } from "./Employees.type";

type Props = {
    handleBackBtnClick: () => void;
    handleSubmitClick: (data: IEmployee) => void;
}

export const Addemployee = (props: Props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    
    const { handleBackBtnClick, handleSubmitClick } = props

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value)
    }
    
    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value)
    }
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmitBtnClick = (e: any) => {
        e.preventDefault();
        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        handleSubmitClick(data);
        handleBackBtnClick();
    }
    
    return (
        <div className={styles["form-container"]}>
            <div>
                <h3>Add Employee Form</h3>
            </div>
            <form onSubmit={handleSubmitBtnClick}>
                <div>
                    <label htmlFor="">First Name: </label>
                    <input type="text" value={firstName} onChange={handleFirstNameChange}/>
                </div>
                <div>
                    <label htmlFor="">Last Name: </label>
                    <input type="text" value={lastName} onChange={handleLastNameChange}/>
                </div>
                <div>
                    <label htmlFor="">Email add.: </label>
                    <input type="email" value={email} onChange={handleEmail}/>
                </div>
                <div>
                    <input type="button" value="back" onClick={handleBackBtnClick} />
                    <input type="submit" value="Add Employee" />
                </div>
            </form>
        </div>
    )
}
