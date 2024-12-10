const btns = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".reset");
let win = document.querySelector(".win");

let turn = "O";
let ct = 0;

resetBtn.addEventListener("click", () => {
    btns.forEach((btn) => {
        btn.innerText = "";
        btn.disabled = false;
    });
    win.style.display = "none";
    win.innerText = "";
    turn = "O"; 
    ct = 0;
});

const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        const [a, b, c] = pattern;
        if (
            btns[a].innerText !== "" &&
            btns[a].innerText === btns[b].innerText &&
            btns[a].innerText === btns[c].innerText
        ) {
            foundWinner(btns[a].innerText);
            return;
        }
    }

    if (ct === 9) {
        foundDraw();
    }
};

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        ct++;
        btn.innerText = turn;
        btn.disabled = true;
        checkWinner();
        turn = turn === "X" ? "O" : "X";
    });
});

const foundWinner = (winner) => {
    btns.forEach((btn) => (btn.disabled = true));
    win.innerText = `${winner} is the Winner!`;
    win.style.display = "block";
};

const foundDraw = () => {
    win.innerText = "It's a Draw!";
    win.style.display = "block";
};
