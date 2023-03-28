import React,{useState} from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Input,
    Select,
    Button,
    Heading,
  } from '@chakra-ui/react'

export default function Form() {
    const [formFields,setFormFields] = useState([
        {
            label:"Age",
            name:"age",
            inputType:'number',
            min:1,
            max:120
        },
        {
            label:"Gender",
            name:"sex",
            inputType:'multiple-choice',
            options:["Female","Male"]
        },
        {
            label:"Chest Pain",
            name:"cp",
            inputType:'multiple-choice',
            options:["Typical Angina","Atypical Angina","Non-Anginal","Asymptomatic"]
        },
        {
            label:"Resting Blood Pressure",
            name:"trestbps",
            inputType:'number',
            min:80,
            max:190,
            helperText:"in mm Hg on admission to the hospital"
        },
        {
            label:"Serum Cholesterol",
            name:"chol",
            inputType:'number',
            min:1,
            max:300,
            step:0.01,
            helperText:"in mg/dl"
        },
        {
            label:"Fasting Blood Sugar",
            name:"fbs",
            inputType:'multiple-choice',
            options:["False","True"],
            helperText:"If fasting blood sugar is greater than 120 mg/dl select true otherwise false"
        },
        {
            label:"Rest Electrocardiograph",
            name:"restecg",
            inputType:'multiple-choice',
            options:["Normal","ST-T wave abnormality","Showing probable or definite left ventricular hypertrophy by Estes’ criteria 20 ekgmo"]
        },
        {
            label:"Maximum Heart Rate Achieved",
            name:"thalach",
            inputType:'number',
            min:1,
            max:300
        },
        {
            label:"Exercise Induced Angina",
            name:"exang",
            inputType:'multiple-choice',
            options:["No","Yes"]
        },
        {
            label:"ST Depression when Workout compared to the Amount of taken",
            name:"oldpeak",
            inputType:'number',
            min:1,
            max:100,
            step:0.1
        },
        {
            label:"Slope of Peak Exercise ST segment ",
            name:"slope",
            inputType:'multiple-choice',
            options:["Up","Flat","Down"]
        },
        {
            label:"Gives the number of Major Vessels Coloured by Fluoroscopy",
            name:"ca",
            inputType:'multiple-choice',
            options:[0,1,2,3]
        },
        {
            label:"Defect Type",
            name:"thal",
            inputType:'multiple-choice',
            options:["Reversible","Fixed","Normal"]
        }

    ]);

    const [formData,setFormData] = useState({});

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    }

    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }

  return (
    <Box maxW='sm' mx='auto' my='50px' p='10px'>
        <form onSubmit={handleSubmit}>
            <Heading mb='10px'>Heart Prediction using Ml</Heading>
            {
                formFields.map((field,index)=>(
                    <FormControl isRequired my='10px' bg='blackAlpha.50' p='10px' borderRadius='10px'>
                        <FormLabel fontWeight='600'>{field.label}</FormLabel>
                        {
                            field.inputType === 'number' &&
                            <Input
                                type={field.inputType}
                                name={field.name}
                                min={field.min}
                                max={field.max}
                                step={field.step?field.step:0}
                                value={formData[field.name] || ""}
                                onChange={handleInputChange}
                            />
                        }

                        {
                            field.inputType === 'multiple-choice' &&
                            <Select
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleInputChange}
                            >
                            {
                                field.options.map((option,optionIndex)=>(
                                    <option key={optionIndex} value={optionIndex}>
                                        {option}
                                    </option>
                                ))
                            }
                            </Select>
                        }
                        {
                            field.helperText?
                            <FormHelperText fontSize='10px'>{field.helperText}</FormHelperText>
                            :null
                        }

                        {
                            (field.inputType === 'number' && !field.helperText) ?
                            <FormHelperText fontSize='10px'>{`please put input this range only ${field.min}-${field.max}`}</FormHelperText>
                            :
                            null
                        }
                        
                    </FormControl>
                ))
            }

            <Button type='submit' className='chakra_button'>Submit</Button>
        </form>

    </Box>
  )
}
