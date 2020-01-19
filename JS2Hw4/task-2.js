function check() {

const name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const mail = document.querySelector('#mail');

const nameRE = /^[A-Za-zА-Яа-яЁё]{2,}$/gi;
const phoneRE = /\+7\(\d{3}\)\d{3}-\d{4}\b/g;
//e-mail validation with comments
const emailRE = /(^\w+(|(\.|\-)\w+))(?=@mail\.ru\b)/gi;
/*                1  2     3           4
1. ищет буквы или цифры в начале строки в количестве от 1 и более;
2. далее может идти:
3. Или точка или дефис, после которых идет \w от 1 и более;
4. И все это только если далее идет @mail.ru, и mail.ru является границей слова
Ищет ТОЛЬКО почту вида
mymail@mail.ru
my.mail@mail.ru
my-mail@mail.ru
и отбрасывает все другие, например
wer----2.34@mail.ru
2-.34@mail.ru
fa=34@mail.ru
fa.-te@mail.ru
23...232@mail.ru
*/

//if validation is false, red border appears around input (with class 'false')
//and message too
function classListToggle(re, data) {
    const test = re.test(data.value);
    if (test) {
        data.classList.remove('false');
        data.nextElementSibling.classList.add('hidden');
    } else {
        data.classList.add('false');
        data.nextElementSibling.classList.remove('hidden');
    }
}

classListToggle(nameRE, name);
classListToggle(telRE, phone);
classListToggle(emailRE, mail);

document.querySelector('input[type="reset"]').addEventListener('click', reset);

//button 'reset' clears all classes 'false'
    function reset() {
        name.classList.remove('false');
        phone.classList.remove('false');
        mail.classList.remove('false');
    }
}
