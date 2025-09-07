const pool = require("../config/dbConnection");

const createUser = async(first_name, last_name, email, id_number, document_path, selfie_path, expiration_date, ocr_data, face_match_score, status)=>{
    const slqInsert = `
      INSERT INTO kyc_users (first_name, last_name, email, id_number, document_path, selfie_path, expiration_date, ocr_data, face_match_score, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *;
    `
    const result = await pool.query(slqInsert, [first_name, last_name, email, id_number, document_path, selfie_path, expiration_date, ocr_data, face_match_score, status])
    return result.rows[0]
};

const getAllUsers = async()=>{
    const result = await pool.query("SELECT * FROM kyc_users");
    return result.rows;
};

const getUserById = async (id)=>{
    const result = await pool.query("SELECT * FROM kyc_users where id = $1", [id])
    return result.rows[0]
};

const updateUser = async(first_name, last_name, email, id_number, document_path, selfie_path, expiration_date, ocr_data, face_match_score, status, id) => {
    const sqlUpdate = `
      UPDATE kyc_users
      SET first_name=$1, last_name=$2, email=$3, id_number=$4, document_path=$5, selfie_path=$6, expiration_date=$7, ocr_data=$8, face_match_score=$9, status=$10, updated_at=NOW()
      WHERE id=$11 RETURNING *;
    ` 
    const result = await pool.query(sqlUpdate, [ first_name, last_name, email, id_number, document_path, selfie_path, expiration_date, ocr_data, face_match_score, status || "pending", id])
    return result.rows[0]
} 

const deleteUser = async(id)=>{
  const result = await pool.query("DELETE FROM kyc_users WHERE id = $1", [id])
  return;
}
module.exports= {
  createUser, 
  getAllUsers, 
  getUserById, 
  updateUser, 
  deleteUser
};