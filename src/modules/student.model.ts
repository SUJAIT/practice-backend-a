
import {  model, Schema } from 'mongoose';
import {  TGuardian,
    TLocalGuardian,
    TStudent,
    TUserName, } from './student/student.interface';
import validator from 'validator';





export const userNameSchema = new Schema<TUserName>({

    firstName: {
        type: String,
        required: [true, "First Name is required"],
        maxlength:[10,'Name can not be more than 10 characters'],
        trim:true, //name space removed this Schema.
        validate:{
validator:function (value:string) {
    const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
    return firstNameStr === value;
}
        },
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: [true,'last name is required'],
        validate:{
            validator:(value:string)=>validator.isAlpha(value),
            message:'{VALUE} is not valid'
        }
    }

})

export const guardianSchema = new Schema<TGuardian>(
    {
        fatherName: {
            type: String,
            required: true,
        },
        fatherOccupation: {
            type: String,
            trim: true,
            required: [true, 'Father occupation is required'],
          },
        fatherContactNo: {
            type: String,
            required: true,
        },
        motherName: {
            type: String,
            required: true,
        },
        motherOccupation: {
            type: String,
            required: true
        },
        motherContactNo: {
            type: String,
            required: true,
        },

    }
)

export const localGuardianSchema = new Schema<TLocalGuardian>(
    {
        name: {
            type: String,
            required: true,
        },
        occupation: {
            type: String,
            required: true,
        },
        contactNo: {
            type: String,
            required: true,
        }
    },
)

export const studentSchema = new Schema<TStudent>({
    id: { type: String },
    name: {
        type:userNameSchema,
        required:[true,'Name is required']
    },
    gender: {
        type:String,
        enum:["male", "female"],
    },
    dateOfBirth: String,
    email: { type: String, required: [true,'Email is requard'],
unique:true,
validate:{
    validator:(value:string)=> validator.isEmail(value),
    message:'{VALUE} is not a valid email type',
},
     },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloogGroup: {
        type: String,
        enum: {
          values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
          message: '{VALUE} is not a valid blood group',
        },
      },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
        type:guardianSchema,
        required:true
    },
    localGuardian:{
        type:localGuardianSchema,
        required:true
    }, 
    profileImg: { type: String },
    isActive: {
        type: String,
        enum:['active','blocked'],
        default:'active'
    },
})

export const StudentModel = model<TUserName>('Student',studentSchema)
