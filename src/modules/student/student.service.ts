import { StudentModel } from "../student.model";
import { TStudent } from "./student.interface";



const creatStudentIntoDB = async (studentData: TStudent)=>{
    // const result = await StudentModel.create(student);
    // return result;

const student = new StudentModel(studentData);
const result = await student.save(); //built in instance method
return result

};

const getAllStudentsFromDB = async () =>{
    const result = await StudentModel.find();
    return result;
}
const getSingaleStudentsFromDB = async (id:string) =>{
    const result = await StudentModel.findOne({id});
    return result;
}

export const StudentServices = {
    creatStudentIntoDB,
    getAllStudentsFromDB,
    getSingaleStudentsFromDB,
}
