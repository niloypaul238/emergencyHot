     
        let callBtns = document.querySelectorAll('.callBtn');
        let history = document.querySelector('.history');
        let faHeart = document.querySelectorAll('.fa-heart');
        let hertIncriss = document.getElementById('hertIncriss');
        let clearBtn = document.querySelector('.clearBtn')
        let hertValue = 0;
        let copyIconsBtn = document.querySelectorAll('.copyBtn');
        let copyIncress = document.getElementById('copyIncress');
        let copyValu = 0;
        



        // callBtn function 
        let callBtnFun = (e) => {
            let date = new Date();
            let mainTarget = e.target;
            let coin = document.getElementById('coin');
            let cardDiv = mainTarget.parentElement.parentElement.parentElement;
            let serviceTitle = cardDiv.children[1].children[0].innerText;
            let serviceHotline = cardDiv.children[1].children[2].innerText;
                      
            //coin blance
            let coinNumber = Number(coin.innerText);
            if( coinNumber > 0){

            alert(`${serviceHotline} number ${serviceTitle} is called`)
                 //console.log(cardDiv.children[1].children[2].innerText);
                    let createDiv = document.createElement('div');
                    createDiv.classList.add('bg-gray-100', 'p-2', 'flex', 'justify-between', 'items-center', 'mt-2');
                    createDiv.innerHTML = `
                                <div class="w-2/3">
                                    <h1 class="text-[14px] font-bold">${serviceTitle}</h1>
                                    <P class="text-gray-400">${serviceHotline}</P>
                                </div>
                                <div class="time w-1/3">
                                    <span class="text-[15px]">${date.toLocaleTimeString()}</span>
                                </div>
                    `;
                    history.append(createDiv)
                    coin.innerText = coinNumber - 20;


            }else{
                alert( `There are not enough coin. You will need at least 20 coin`)
            }

        }
        // call click event
        callBtns.forEach( callBtn => {
            callBtn.addEventListener('click' , callBtnFun)
        })


        // hert click function
        let hertIncrissFun = (e) => {
                let hertTarget = e.target;
                hertValue++;
                hertIncriss.innerText = hertValue;                
        }

        faHeart.forEach( heart => {
            heart.addEventListener('click' , hertIncrissFun)
        })


    //   copy function 
        copyIconsBtn.forEach( copyIcon => {
            copyIcon.addEventListener('click' , () => {
                let copyHotlineNumber = copyIcon.parentElement.parentElement.children[2].innerText;

                navigator.clipboard.writeText(copyHotlineNumber)
                alert(`${copyHotlineNumber} number has been copied`)
                console.log(copyHotlineNumber);
                copyValu++;
                copyIncress.innerText = copyValu;
            })
        })
        

        //call history clear 
        clearBtn.addEventListener('click' , () => {
            history.innerHTML = ""
        })
 