function validateUserData(req, res, next){

    const { first_name, last_name, email, id_number, expiration_date} = req.body;

    if (!first_name || first_name.length < 2) {
        return res.status(400).json({ error: "Prénom obligatoire, 2 caractères minimum" });
    }
    if (!last_name || last_name.length < 2) {
        return res.status(400).json({ error: "Nom obligatoire, 2 caractères minimum" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ error: "Email obligatoire et valide" });
    }
    if (!id_number || id_number.length < 6) {
        return res.status(400).json({ error: "id_number obligatoire, 6 caractères minimum" });
    }
    if (expiration_date && isNaN(Date.parse(expiration_date))) {
        return res.status(400).json({ error: "expiration_date doit être une date valide" });
    }
    next();
}

module.exports = validateUserData;