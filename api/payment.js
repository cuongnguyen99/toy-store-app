import api from "./client";

const endpoint = "user/history";
const payment = "api/payment";

// router.get('/history', auth, userCtrl.history)

const getBill = (accessToken) => {
    return api.get(endpoint, "", {
        headers: {Authorization: accessToken}
    });
}

const createBill = (accessToken, cart, data, pay, total, onUploadProgress) => {
    let random = Math.floor(Math.random()*100000)+ Math.floor(Math.random()*100000)
    const paymentID = "PAYID-NONPREPAY-"+random;
    const address = {
        recipient_name: "John Doe",
        line1: "1 Main St",
        city: "San Jose",
        state: "CA",
        postal_code: "95131",
        country_code: "US"
    };

    const shipname = data.fullname;
    const shipaddress = data.province;
    const shipcity = data.district;
    const shipstate = data.state;
    const shipphone = data.phone;

    return api.post(payment, {cart, paymentID, address, shipname, shipaddress, shipcity, shipstate, shipphone, pay, total}, {
        headers: {Authorization: accessToken},
        onUploadProgress:  (progress) => onUploadProgress(progress.loaded/progress.total),
    });
}

export default { getBill, createBill };