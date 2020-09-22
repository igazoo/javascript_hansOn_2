'use strict'

//出力

const OPTION_ANSWER = document.getElementById('optionAnswer');

//ラジオボタン

function riceButtonClick() {
    const RICE_INPUT = document.riceForm.rice;//form内の要素を取得
    let rice_output;
    for (let i = 0; i < RICE_INPUT.length; i++) {
        if (RICE_INPUT[i].checked) {
            rice_output = RICE_INPUT[i].value;
        }
    }

    OPTION_ANSWER.textContent = `ご飯の量 : ${rice_output}`;
}

//checkボタンの場合
function accessoryButtonClick() {
    const ACCESSORY_INPUT = document.accessoryForm.accessory;
    let accessory_output = " ";

    for (let i = 0; i < ACCESSORY_INPUT.length; i++) {
        if (ACCESSORY_INPUT[i].checked) {
            accessory_output = accessory_output + ' ' + ACCESSORY_INPUT[i].value;
        }
    }
    OPTION_ANSWER.textContent = `付属品 : ${accessory_output}`;
}

//selectBoxの場合
//document.フォーム名.selectオブジェクト名.option[index番号.value]
function mediaButtonClick() {
    const MEDIA_INPUT = document.mediaForm.media;
    const NUM = MEDIA_INPUT.selectedIndex;//index番号
    if (NUM != 0) {
        OPTION_ANSWER.textContent = `当店を知ったきっかけ : ${MEDIA_INPUT.options[NUM].value}`;

    }

    //console.log(NUM);
}

//textの場合
function addressButtonClick() {
    const ADDRESS = document.addressForm.address.value;
    OPTION_ANSWER.textContent = `お届け先住所 : ${ADDRESS}`;
}

//textareaの場合
function requestButtonClick() {
    const REQUEST = document.requestForm.request.value;
    OPTION_ANSWER.textContent = `その他のご要望 : ${REQUEST}`;
}