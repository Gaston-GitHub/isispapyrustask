class Table {
  constructor(data, tableName) {
    this.data = data;
    this.tableName = tableName;
  }

  deleteRow(e) {
    const index = e.target.value;
    this.data.splice(index, 1);

    const refresh = new Table(this.data, this.tableName);
    refresh.render();
  }

  AddBtnRemovelistener() {
    const btnRemove = document.getElementsByName('delete');
    const arrFrom = Array.from(btnRemove);
    arrFrom.forEach((button) => {
      button.addEventListener('click', (e) => this.deleteRow(e));
    });
  }

  render() {
    const table = this.data
      .map((arrArr, ind) => {
        let arrStr = arrArr
          .map((cel) => {
            return `<td class='px-3 py-2'>${cel}</td>`;
          })
          .join('');
        arrStr += `<td><button class='border-l underline px-2 py-1 text-blue-500' name="delete" value=${ind}>delete</button></td>`;

        return `<tr class='border'>${arrStr}</tr>`;
      })
      .join('');

    document.getElementById(
      this.tableName
    ).innerHTML = `<div class='text-gray-500 grid place-items-center h-screen'><table class='bg-gray-50 font-mono text-sm'>${table}</table></div>`;
    this.AddBtnRemovelistener();
  }
}

const arr = [
  ['Product 1', 'Description', 'Price', 'Quantity'],
  ['Product 2', 'Description', 'Price', 'Quantity'],
  ['Product 3', 'Description', 'Price', 'Quantity'],
  ['Product 4', 'Description', 'Price', 'Quantity'],
  ['Product 5', 'Description', 'Price', 'Quantity'],
  ['Product 6', 'Description', 'Price', 'Quantity'],
];

const arr2 = [
  ['Product 1', 'Description'],
  ['Product 2', 'Description'],
  ['Product 3', 'Description'],
  ['Product 4', 'Description'],
];

const table = new Table(arr, 'table');
table.render();

// to Prove component reusability uncomment this lines

// const table1 = new Table(arr2, 'table1');
// table1.render();
