const User = require("../model/userModel");

const addUser = async(req, res, next)=>{
    try {
        const {first_name, last_name, email, id_number, document_path, selfie_path, expiration_date, ocr_data, face_match_score, status} = req.body;
        const newUser = await User.createUser(first_name, last_name, email, id_number, document_path, selfie_path, expiration_date, ocr_data, face_match_score, status);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}

const showAllusers = async(req, res, next)=>{
    try {
        const allUsers = await User.getAllUsers();
        res.status(200).json(allUsers);
    } catch (error) {
        next(error)
    }
}

const showSpecifiedUser = async(req, res, next)=>{
    try {
        const id = req.params.id;
        const specifiedUser = await User.getUserById(id);
        res.status(200).json(specifiedUser);
    } catch (error) {
        next(error)
    }
}

const modifyUser = async(req, res, next)=>{
    try {
        const id = req.params.id ;
        const {first_name, last_name, email, id_number, document_path, selfie_path, expiration_date, ocr_data, face_match_score, status} = req.body;
        const userNewData = await User.updateUser(first_name, last_name, email, id_number, document_path, selfie_path, expiration_date, ocr_data, face_match_score, status, id)
        res.status(200).json(userNewData);
    } catch (error) {
        next(error)
    }
}

const removeUser = async(req, res, next)=>{
    try {
        const id = req.params.id;
        const removedUser = await User.deleteUser(id);
        res.status(200).json({message: "Utilisateur supprimé avec succes", removedUser})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addUser,
    showAllusers,
    showSpecifiedUser,
    modifyUser,
    removeUser
}