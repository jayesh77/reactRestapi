import styles from './Table.module.css'
const Table=(props)=>{
return (
    <div className={styles.center}>
 <div className="col-sm-10">
     
            <table className="table table-hover bg-white text-dark">
                <thead>
                <tr className="text-center">
                    <th scope="col" style={{width: "25%"}}>Id</th>
                    <th scope="col" style={{width: "25%"}}>Name</th>
                    <th scope="col" style={{width: "50%"}}>email</th>
                    <th scope="col" style={{width: "25%"}}>Action</th>

                </tr>
                </thead>
                <tbody>
                    {props.student.map((element)=>{return (<tr>
                        <th scope="row" className="text-center">{element.id}</th>
                        <td className="text-center"><p>{element.stuname} </p></td>
                        <td className="text-center"><p>{element.email} </p></td>
                        <td className="text-center">
               
                            <button className="btn btn-warning btn-sm" onClick={()=>{props.onEdit(element.id)}}>Edit</button>
                            <button className="btn btn-danger btn-sm" onClick={()=>{props.onDelete(element.id)}}>Delete</button>
                    </td>
                    </tr>)})}
                    

                </tbody>
            </table> 
            </div>
            </div>  )
}
export default Table