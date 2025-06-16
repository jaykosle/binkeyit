const verifyEmailTemplate = ({name,url})=>{
    return `
    <p> Dear ${name} <p>
    <p> Thank you for registering at Binkeyit.</p>
    <a href = ${url} style="color: black; background :rgb(10, 23, 120); margin-top : 10px; padding : 20px">
        Verify Email
    </a>
    `
}

export default verifyEmailTemplate