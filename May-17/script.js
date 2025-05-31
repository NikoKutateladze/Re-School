const funds = document.getElementById("funds");
const invest = document.getElementById("invest");
const dashbrd = document.getElementById("dashbrd");
const text = document.getElementById("h1");
const buttonAddInvestor = document.getElementById("buttonAddInvestor");
const container = document.getElementById("container");
const table = document.getElementById("table");
const close = document.getElementById("icon");
const blackBackground = document.getElementById("blackBackground");
const buttonSave = document.getElementById("buttonSave");
const n4me = document.getElementById("name");
const surname = document.getElementById("surname");
const mnInvest = document.getElementById("mnInvest");
const mxInvest = document.getElementById("mxInvest");
const head = document.getElementById("head");

const container2 = document.getElementById("container2");
const buttonSave2 = document.getElementById("buttonSave2");
const n4me2 = document.getElementById("name2");
const surname2 = document.getElementById("surname2");
const mnInvest2 = document.getElementById("mnInvest2");
const mxInvest2 = document.getElementById("mxInvest2");
const head2 = document.getElementById("head2");
const close2 = document.getElementById("icon2");

const inputsArray = [n4me, surname, mnInvest, mxInvest];

const inputsArray2 = [n4me2, surname2, mnInvest2, mxInvest2];

let rowBeingEdited = null;

const span = document.getElementById("span");

funds.addEventListener("click", function (e) {
    text.textContent = "Funds";
    table.style.display = "none";
    buttonAddInvestor.style.display = "none";
});

invest.addEventListener("click", function (e) {
    text.textContent = "The Investors Page";
    table.style.display = "table";
    buttonAddInvestor.style.display = "inline-block";
});

dashbrd.addEventListener("click", function (e) {
    text.textContent = "Dashboard";
    table.style.display = "none";
    buttonAddInvestor.style.display = "none";
})

buttonAddInvestor.addEventListener("click", () => {
    container.style.display = "block";
    blackBackground.style.display = "block";
    head.textContent = "Add Investor";
    n4me.value = "";
    surname.value = "";
    mnInvest.value = "";
    mxInvest.value = "";
})

close.addEventListener("click", () => {
    container.style.display = "none";
    blackBackground.style.display = "none";
})

close2.addEventListener("click", () => {
    container2.style.display = "none";
    blackBackground.style.display = "none";
})

buttonSave.addEventListener("click", () => {
    if (
        n4me.value === "" ||
        surname.value === "" ||
        mnInvest.value === "" ||
        mxInvest.value === ""
    ) {
        container.style.display = "block";
        blackBackground.style.display = "block";
    } else {
        container.style.display = "none";
        blackBackground.style.display = "none";

        const tr = document.createElement("tr");
        tr.style.fontWeight = "600"
        tr.style.height = "100px";
        tr.style.backgroundColor = "#fff";
        tr.innerHTML = `
      <td>${n4me.value}</td>
      <td>${surname.value}</td>
      <td>${mnInvest.value}</td>
      <td>${mxInvest.value}</td>
      <td class="td">
        <div class="buttonEdit">Edit</div>
        <div class="buttonDelete">Delete</div>
      </td>
    `;

        document.getElementById("table-body").appendChild(tr);
        const buttonEdit = tr.querySelector(".buttonEdit");
        const buttonDelete = tr.querySelector(".buttonDelete");
        const td = tr.querySelector(".td")
        td.style = `
    display: flex;
    align-items: center;
    justify-content: space-around;
    `
        buttonDelete.style = `
    padding: 12px;
    background-color: #e92424;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    transition: .2s;
    cursor: pointer;
    `;
        buttonDelete.addEventListener("mouseenter", () => {
            buttonDelete.style.backgroundColor = "#d02323";
        });
        buttonDelete.addEventListener("mouseleave", () => {
            buttonDelete.style.backgroundColor = "#e92424";
        });
        buttonEdit.style = `
    padding: 12px;
    background-color: #2463e9;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    transition: .2s;
    cursor: pointer;
    `;
        buttonEdit.addEventListener("mouseenter", () => {
            buttonEdit.style.backgroundColor = "#225fe1";
        });
        buttonEdit.addEventListener("mouseleave", () => {
            buttonEdit.style.backgroundColor = "#2463e9";
        });

        buttonEdit.addEventListener("click", function() {
            container2.style.display = "block";
            blackBackground.style.display = "block";
            head2.textContent = "Edit Investor";

            rowBeingEdited = this.parentElement.parentElement;

            let children = rowBeingEdited.children;
            for (var i = 0; i < children.length - 1; i++) {
                inputsArray2[i].value = children[i].textContent
            }
            n4me.value = "";
            surname.value = "";
            mnInvest.value = "";
            mxInvest.value = "";
            buttonSave2.addEventListener("click", () => {
                if (
                    n4me2.value === "" ||
                    surname2.value === "" ||
                    mnInvest2.value === "" ||
                    mxInvest2.value === ""
                ) {
                    container.style.display = "block";
                    blackBackground.style.display = "block";
                } else {
                    let children2 = rowBeingEdited.children;
                    container2.style.display = "none";
                    blackBackground.style.display = "none";
                    for (var j = 0; j < children2.length - 1; j++) {
                        children2[j].textContent = inputsArray2[j].value;
                    }
            }
        })
        });

        

        buttonDelete.addEventListener("click", () => {
            window.confirm("Are You sure You want to Delete?");
            if(true) {
                tr.remove();
            } else {
                return
            }
        });

        
    }
});


