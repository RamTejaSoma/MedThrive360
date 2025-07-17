import express from 'express'
import { registerUser,loginUSer, getProfile, updateProfile,bookAppointment, listAppointments, cancelAppointment,paymentRazorPay, verifyRazorPay } from '../contollers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const userRouter=express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUSer)
userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile', authUser,upload.single('image'),updateProfile)
userRouter.post('/book-appointment', authUser,bookAppointment)
userRouter.get('/appointments', authUser,listAppointments)
userRouter.post('/cancel-appointment', authUser,cancelAppointment)
userRouter.post('/payment-razorpay', authUser,paymentRazorPay)
userRouter.post('/verify-razorpay', authUser,verifyRazorPay)
export default userRouter