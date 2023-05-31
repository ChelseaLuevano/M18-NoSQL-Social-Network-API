const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    addFriend,
    removeFriend,
    updateUser,
    deleteUser
} = require('../../controllers/userController')

// /api/users
router.route('/').get(getUsers).post(createUser)

// /api/users/:usersId
router
    .route('users_id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends
router.route('/:userId/friends').post(addFriend)

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend)


module.exports = router;
