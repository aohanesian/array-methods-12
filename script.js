const users = [
    ["john", "red", 5, ["ball", "book", "pen"]],
    ["becky", "blue", 10, ["tape", "backpack", "pen"]],
    ["susy", "red", 55, ["ball", "eraser", "pen"]],
    ["tyson", "green", 1, ["book", "pen"]],
];

// 1. Create a new array using forEach that has all usernames with a "!" to each of the usernames. Example: ["john!", "becky!", ...].
let userName1 = [];
users.forEach(item => userName1.push(`${item[0]}!`));
// 2. Create another new array using map that has all usernames with a "?" to each of the usernames. Example: ["john?", "becky?", ...].
let userName2 = users.map(item => `${item[0]}?`);
// 3. Filter the original array of users to only include users who are on team: red.
let userName3 = users.filter(item => item[1] === "red")
// 4. In filtered array find out the total score of all filtered users and print all user's data into table as:
let totalScore = 0;
userName3.forEach(item => totalScore += item[2]);
let thArr = [`Name`, `Comand`, `Score`, `Data`];
let THs = thArr.map(item => `<th>${item}</th>`).join(``);

let TRs = [];
for (let i = 1; i < userName3.length + 1; i++) {
    let TDs = [];
    for (let j = 1; j < userName3[i - 1].length + 1; j++) {
        if (Array.isArray(userName3[i - 1][j - 1])) {
            TDs.push(`<td>${userName3[i - 1][j - 1].join('; ')}</td>`);
        } else {
            TDs.push(`<td>${userName3[i - 1][j - 1]}</td>`);
        }
    }
    TRs.push(`<tr>${TDs.join(``)}</tr>`);
}

document.write(`<table>
    <thead>
        <tr>
${THs}
        </tr>
    </thead>
    <tbody>
${TRs}
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">Total score: ${totalScore}</td>
        </tr>
    </tfoot>
</table>`)