const sub = document.getElementById('submit');
sub.addEventListener('click', () => {
    let name = document.getElementById('exampleFormControlInput1').value;
    let contact = document.getElementById('contactNumber').value;
    let comments = document.getElementById('exampleFormControlTextarea1').value;

    alert('Name: ' + name + "\n" + 'Contact Number: ' + contact + "\n" + 'Comments: ' + comments);
});
