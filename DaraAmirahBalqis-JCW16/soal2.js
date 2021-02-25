arr = [
    { produk: 'Coca Cola', price: 5000, category: 'drink' },
    { produk: 'Sprite', price: 7000, category: 'drink' },
    { produk: 'Fanta', price: 3500, category: 'drink' }
]

let indexEdit = -1

const printData = () => {
    let result = arr.map((val, idx) => {
        if (idx == indexEdit) {
            return `<tr>
                    <td>${idx + 1}</td>
                    <td><input type="text" placeholder="masukkan nama barang" value="${val.produk}" id="editProduk${idx}"></td>
                    <td><input type="text" placeholder="masukkan harga" value="${val.price}" id="editHarga${idx}"></td>
                    <td>
                        <input type="radio" value="${val.category}" name="editCategory${idx}"> food
                        <input type="radio" value="${val.category}" name="editCategory${idx}"> drink
                        <input type="radio" value="${val.category}" name="editCategory${idx}"> others

                    </td>
                    <td>
                        <button onclick="onSaveClick(${idx})">Save</button>
                        <button onclick="onCancelClick()">Cancel</button>
                    </td>
                </tr>`
        }

        return `<tr>
                    <td>${idx + 1}</td>
                    <td>${val.produk}</td>
                    <td>${val.price}</td>
                    <td>${val.category}</td>
                    <td>
                        <button onclick="onEditClick(${idx})">Edit</button>
                        <button onclick="onDeleteClick(${idx})">Delete</button>
                    </td>
                </tr>`
    })
    document.getElementById('renderData').innerHTML = result.join('')
}
printData()

const addData = () => {
    var produk = document.getElementById('inputProduk').value
    var price = document.getElementById('inputHarga').value
    var kiri = document.getElementsByName('category')[0].checked
    var tengah = document.getElementsByName('category')[1].checked
    var kanan = document.getElementsByName('category')[2].checked
    var category
    if (kiri) {
        category = 'food'
    } else if (tengah) {
        category = 'drink'
    } else {
        category = 'others'
    }

    if (produk && price && category) {
        var result = { produk: produk, price: price, category: category }
        arr.push(result)
        printData()
    } else {
        alert('input harus diisi semua')
    }

    document.getElementById('inputProduk').value = ''
    document.getElementById('inputHarga').value = ''
    document.getElementsByName('category')[0].checked = false
    document.getElementsByName('category')[1].checked = false
    document.getElementsByName('category')[2].checked = false
}

const onDeleteClick = (idx) => {
    arr.splice(idx, 1)
    printData()
}

const onEditClick = (idx) => {
    indexEdit = idx
    printData()
}

const onCancelClick = () => {
    indexEdit = -1
    printData()
}

const onSaveClick = (idx) => {
    var editProduk = document.getElementById('editProduk' + indexEdit).value
    var editHarga = document.getElementById('editHarga' + indexEdit).value
    var editKiri = document.getElementsByName('editCategory' + indexEdit)[0].checked
    var editTengah = document.getElementsByName('editCategory' + indexEdit)[1].checked
    var editKanan = document.getElementsByName('editCategory' + indexEdit)[2].checked
    var editCategory
    if (editKiri) {
        editCategory = 'food'
    } else if (editTengah) {
        editCategory = 'drink'
    } else {
        editCategory = 'others'
    }

    arr[idx].produk = editProduk
    arr[idx].price = editHarga
    arr[idx].category = editCategory
    indexEdit = -1
    printData()
}