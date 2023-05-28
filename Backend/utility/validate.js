import jwt  from "jsonwebtoken";


/**
 * Generate Access Token
 * @param {*} payload 
 * @param {*} exp 
 * @returns 
 */
export const createToken = (payload, exp) => {

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: exp });

    return token
}


/**
 * verify access token
 * @param {*} token 
 * @returns 
 */
export const verifyToken = (token) => {


    // invalid token
   const tokens =  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {

        if (err) {
            return null
        }
        return decoded
        // err
        // decoded undefined
    });

    return tokens
}