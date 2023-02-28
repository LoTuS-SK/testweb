const Router = require("express");
const router = new Router();
const useConroller = require("../controlers/user.controlers")

router.post("/user",useConroller.createUser)
router.get("/user",useConroller.getUsers)
router.get("/user/:id",useConroller.getOneUser)
router.put("/user",useConroller.updateUser)
router.delete("user/:id",useConroller.deleteUser)



module.exports = router;