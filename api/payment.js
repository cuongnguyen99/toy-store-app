import fakeApi from "./fakeApi";

const endpoint = "bill";

const getBill = (username) => {
    return fakeApi.get(endpoint+"?username="+username, "", {});
}

const createBill = (cart, data, prePay, totalPay, email, onUploadProgress) => {
    const value = {
        cart: cart,
        name: data.fullname,
        shipaddress: data.province,
        shipcity: data.district,
        shipstate: data.state,
        shipphone: data.phone,
        paid: prePay,
        total: totalPay,
        username: email,
        billstatus: 'Chưa xác nhận',
    };

    return fakeApi.post(endpoint, value, {
        onUploadProgress: (process) => onUploadProgress(process.loaded / process.total),
    });
}

export default {getBill, createBill};