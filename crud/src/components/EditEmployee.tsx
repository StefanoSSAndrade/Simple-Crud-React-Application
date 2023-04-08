import { IEmployee } from "./Employees.type"
import styles from "./Addemployee.module.css"
import { useState } from "react"

type Props = {
  data: IEmployee;
  handleBackBtnClick: () => void;
  handleUpdateClick: (data: IEmployee) => void;
}

export const EditEmployee = ({ data, handleBackBtnClick, handleUpdateClick }: Props) => {

  const [firstName, setFirstName] = useState(data.firstName)
  const [lastName, setLastName] = useState(data.lastName)
  const [email, setEmail] = useState(data.email)

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const editFirstName = e.currentTarget.value
    if (editFirstName === "") {
      alert(`O campo não pode ficar vazio`)
    } else {
      setFirstName(editFirstName)
    }
  }

  const handleLastNameChange = (e: any) => {
    setLastName(e.current.value)
  }
  const handleEmail = (e: any) => {
    setEmail(e.current.value)
  }

  const handleSubmitBtnClick = (e: any) => {
    e.preventDefault();
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email
    }
    handleUpdateClick(updatedData);
    handleBackBtnClick();
    console.log(firstName)
  }

  return (
    <div className={styles["form-container"]}>
      <div>
        <h3>Edit employee</h3>
      </div>
      <form onSubmit={handleSubmitBtnClick}>
        <div>
          <label htmlFor="">First Name: </label>
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div>
          <label htmlFor="">Last Name: </label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div>
          <label htmlFor="">Email add.: </label>
          <input type="email" value={email} onChange={handleEmail} />
        </div>
        <div>
          <input type="button" value="back" onClick={handleBackBtnClick} />
          <input type="submit" value="Confirm updates" />
        </div>
      </form>
    </div>
  )
}
