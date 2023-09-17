import { MDBContainer } from "@/lib/mdb-react-ui-kit"

function ContactUs()
{
    return (

        <MDBContainer className="!mx-auto">
            <MDBContainer className="w-100 flex flex-col justify-content-center pt-32 pb-4 md:pb-16 mx-auto">
                <h1 className="text-center font-bold text-6xl">Contact Us</h1>
            </MDBContainer>
            <MDBContainer className="flex flex-col justify-content-center pt-12 pb-32 mx-auto">
                <h2 className="text-center font-bold text-lg md:text-3xl">Email us at <span className="text-blue-500">codewriteacademy@gmail.com</span> for any comments or concerns.</h2>
            </MDBContainer>
        </MDBContainer>   
    )
}

export default ContactUs;
