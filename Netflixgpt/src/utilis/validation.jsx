export const checkvalidatedata =(email,password)=>{
    const  isEmailvalid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    const isPasswordvalid =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    if(!isEmailvalid) return "Invalid email";
    if(!isPasswordvalid) return "Invalid password";
    return null;
}