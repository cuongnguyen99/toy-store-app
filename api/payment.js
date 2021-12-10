import api from "./client";

const endpoint = "user/history";

// router.get('/history', auth, userCtrl.history)

const getBill = (accessToken) => {
    return api.get(endpoint, "", {
        headers: {Authorization: accessToken}
    });
}

export default { getBill };