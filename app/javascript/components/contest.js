import React from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form'
import biking from '../../assets/images/04.jpg'
import Footer from './footer'

function Contest() {
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {

        const token = document.querySelector('meta[name="csrf-token"]').content;
        // const data = { firstname: "tolu", lastname: "ade", email: "bdf", slogan: "looks like the first one worked again" }
        // useEffect(() => {
        const headers = {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
        }

        axios.post('http://localhost:3000/api/v1/submissions/create', data, { headers })
        console.log(data);
        // }, [])

    }
    return (
        // form error design
        <>
            <div className="relative min-h-full">
                <div className="md:mx-12 pb-32">
                    <h1 className="text-center text-4xl">Contest</h1>
                    <div className="mt-12 
                flex 
                justify-center 
                bg-center 
                bg-cover 
                w-full 
                p-4
                h-full
                "
                        style={{ backgroundImage: `url(${biking})` }} >
                        {/* <div>
                    <img src={biking} alt="bike racing" className="h-40"/>
                </div> */}
                        <form onSubmit={handleSubmit(onSubmit)} className="w-64">
                            <input
                                name="firstname"
                                ref={register({
                                    required: true,
                                })}
                                placeholder="Firstname"
                                className="block h-12 w-full bg-transparent mt-4 border-2 border-gray-600 border-solid"
                                style={{ borderColor: errors.firstname && "red" }}
                            />
                            {errors.firstname && <span className="text-red-600">Your input is required</span>}
                            <input
                                name="lastname"
                                ref={register({
                                    required: true,
                                })}
                                placeholder="Lastname"
                                className="block w-full h-12 bg-transparent mt-4 border-2 border-gray-600 border-solid"
                                style={{ borderColor: errors.lastname && "red" }}
                            />
                            {errors.lastname && <span className="text-red-600">Your input is required</span>}
                            <input
                                name="email"
                                ref={register({
                                    required: true,
                                    // validate: (input) => isEmail(input), ?.type === "required" 

                                })}
                                className="block w-full h-12 bg-transparent mt-4 border-2 border-gray-600 border-solid"
                                style={{ borderColor: errors.email && "red" }}
                                placeholder="Email"
                            />
                            {errors.email && <span className="text-red-600">Your input is required</span>}
                            <textarea
                                name="slogan"
                                ref={register({
                                    required: true,
                                    maxLength: 50,

                                })}
                                className="block w-full h-12 bg-transparent mt-4 border-2 border-gray-600 border-solid"
                                style={{ borderColor: errors.slogan && "red" }}
                                placeholder="Enter slogan...."
                            />
                            {errors.slogan?.type === "required" && <span className="text-red-600">Your input is required</span>}
                            {errors.slogan?.type === "maxLength" && "Your input exceed max length"}
                            <button type="submit" className="block h-10 mt-4 border-2 border-gray-600 border-solid px-12 font-semibold outline-none py-2">Submit</button>

                        </form>
                    </div>

                </div>
                <Footer />
            </div>


        </>
    )
}

export default Contest;