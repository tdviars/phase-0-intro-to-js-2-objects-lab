const employee = {};
const updateEmployeeWithKeyAndValue=(employee, key, value)=>{
    let new_obj = Object.assign({},employee,{[key]:value});
    return new_obj;
}
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value)=>{
    employee[key] =value;
    return employee;
}
const deleteFromEmployeeByKey = (employee, key)=>{
    const new_obj = {...employee};
    delete new_obj[key];
    return new_obj;
}
const destructivelyDeleteFromEmployeeByKey = (employee, key)=>{
    delete employee[key];
    return employee;
}