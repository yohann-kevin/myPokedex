// --------new test-----------------
export function search() {
    
    let test = document.getElementById('input');
    test.addEventListener("keyup", event => {
        let input = document.getElementById('input').value;
        let name = document.getElementsByClassName('pokeName');
        let tabTest = [];
        for (let i = 0; i < name.length; i++) {
            tabTest.push(name[i].textContent);
        }


        input = input.toLowerCase();
        console.log(tabTest)
        let x = document.getElementsByTagName('li');

        for (let i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display = "none";
            }
            console.log('test');
            // if (!x[i].innerHTML.toLowerCase().includes(input)) {
            //     x[i].style.display = "none";
            // } else {
            //     x[i].style.display = "";
            // }
        }
    })
}


// ---------------------test-----------------------
// export function search() {
//     let input = document.getElementById('input').value;
//     let name = document.getElementsByClassName('pokeName');
//     let tabTest = [];
//     for (let i = 0; i < name.length; i++) {
//         tabTest.push(name[i].textContent);
//     }


//     input = input.toLowerCase();
//     console.log(tabTest)
//     let x = document.getElementsByTagName('li');

//     for (let i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display = "none";
//         }
//         console.log('test');
//         // if (!x[i].innerHTML.toLowerCase().includes(input)) {
//         //     x[i].style.display = "none";
//         // } else {
//         //     x[i].style.display = "";
//         // }
//     }
// }

// ---------------------test---------------------
// function myFunction() {
//     console.log('plop')
//     let input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('input');
//     filter = input.value.toLowerCase();
//     ul = document.getElementById('ul');
//     li = ul.getElementsByTagName('li');

//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName('a')[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toLowerCase().indexOf(filter) > -1) {
//             li[i].style.display = "block";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }