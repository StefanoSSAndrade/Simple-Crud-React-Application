import styles from "./EmployeeModal.module.css"
import { IEmployee } from "./Employees.type";

type Props = {
    onClose: () => void;
    data: IEmployee;
}

export const EmployeeModal = ({ onClose, data }: Props) => {

    return (
        <div className={styles.modal}>
            <div className={styles["modal-content"]}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <h3>Employee Data</h3>
                <div>
                    <label>
                        First Name: {data.firstName}
                    </label>
                </div>
                <div>
                    <label>
                        Last Name: {data.lastName}
                    </label>
                </div>
                <div>
                    <label>
                        Email Add: {data.email}
                    </label>
                </div>
            </div>
        </div>
    )
}
