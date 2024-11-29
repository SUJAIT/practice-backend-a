

import { Request, Response } from "express";
import { StudentServices } from './student.service';
// import { z } from "zod";
import studentValidationSchema from "./student.validation";
// import {userNameSchema,guardianSchema,localGuardianSchema} from '../student.model'

//validation 
// import Joi from 'joi'

const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;
        const zodParsedData = studentValidationSchema.parse(studentData);
    
        const result = await StudentServices.creatStudentIntoDB(zodParsedData);
    
        res.status(200).json({
          success: true,
          message: 'Student is created succesfully',
          data: result,
        });
      } catch (err: any) {
        res.status(500).json({
          success: false,
          message: err.message || 'something went wrong',
          error: err,
        });
      }

};

//controler function 
const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB()

        res.status(200).json({
            success: true,
            message: "Students is retrieved succesfully",
            data: result,
        });

    } catch (err) {
        console.log(err)
    }
}


//Single Students Controller Api

const getSingleStudents = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const result = await StudentServices.getSingaleStudentsFromDB(studentId)

        res.status(200).json({
            success: true,
            message: "Students is retrieved succesfully",
            data: result,
        });

    } catch (err) {
        console.log(err)
    }
}

export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudents
}

