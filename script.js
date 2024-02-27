function calculateChange() {
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    const amountPaid = parseFloat(document.getElementById('amountPaid').value);

    if (isNaN(totalAmount) || isNaN(amountPaid)) {
        document.getElementById('changeResult').innerHTML = 'Please enter valid amounts.';
        return;
    }

    const change = amountPaid - totalAmount;
    if (change < 0) {
        document.getElementById('changeResult').innerHTML = 'Insufficient amount paid.';
    } else {
        document.getElementById('changeResult').innerHTML = `Change: ₹${change.toFixed(2)}`;
    }
}
