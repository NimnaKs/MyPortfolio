import {customer_db} from "../db/db.js";
import {CustomerModel} from "../model/customerModel.js";

let submit = $('#Customer .btn-success').eq(0);
let update = $('#Customer .btn-primary');
let delete_btn = $('#Customer .btn-danger');
let reset = $('#Customer .btn-warning');

let customer_id = $('#customer_id');
let name = $('#customer_name');
let address = $('#address');
let contact = $('#contact');
let email = $('#email');

/*Customer Form Submit*/
submit.on('click', () => {

    let customerIdValue = customer_id.val();
    let nameValue = name.val().trim();
    let addressValue = address.val().trim();
    let contactValue = contact.val().trim();
    let emailValue = email.val().trim();

    if (validate(customerIdValue,"Please Enter Customer Id")) {
        let customer = new CustomerModel(
            customerIdValue,
            nameValue,
            addressValue,
            contactValue,
            emailValue
        );

        customer_db.push(customer);

        Swal.fire(
            'Save Successfully !',
            'Successful',
            'success'
        )

        populateStudentTable();

        reset.click();
    }

});

/*Populate Table*/

function populateStudentTable(){
    console.log("Populated Table2");
    $('tbody').eq(0).empty();
    customer_db.map((customer) => {
        $('tbody').eq(0).append(
            `<tr>
                <th scope="row">${customer.customer_id}</th>
                <td>${customer.name}</td>
                <td>${customer.address}</td>
                <td>${customer.contact}</td>
                <td>${customer.email}</td>
            </tr>`
        );
    });
}

/* Validate */

const validate=function (value,errorMsg){
    if(!value){
        Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: errorMsg,
            footer: '<a href="">Why do I have this issue?</a>'
        });
        return false;
    }
    return true;
}
