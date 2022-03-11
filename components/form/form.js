import { AiOutlineMail } from "react-icons/ai"
import formStyles from "./form.module.css"

export default function Form() {

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Get data from the form.
    const data = {
        name: e.target.name.value,
        content: e.target.content.value,
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/form'
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      alert(result.data)
    }

    return (
        <>
            <div className={formStyles.icon_container}>
                <AiOutlineMail className={formStyles.icon} />
            </div>
            <form className={formStyles.form} onSubmit={handleSubmit}>
                <input className={`${formStyles.input} ${formStyles.input_name}`} type="text" name="name" required maxLength={40} placeholder="enter name" />
                <textarea className={`${formStyles.input} ${formStyles.input_content}`} name="content" required maxLength={300} placeholder="enter content"></textarea>
                <button className={formStyles.button} type="submit">submit</button>
            </form>
        </>
    )
}