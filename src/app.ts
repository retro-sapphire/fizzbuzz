import validator from 'validator';
import { locationEnum } from './utils/location';
import { NumberInput } from './components/input';

const addNumBtn = document.querySelector('#addNum')! as HTMLButtonElement;

addNumBtn.addEventListener('click', (e: Event) => {
  e.preventDefault();
  new NumberInput('num', locationEnum.BeforeEnd, 'numList');
});

const form = document.querySelector('#game')! as HTMLFormElement;
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const numList = document.querySelector('#numList')! as HTMLDivElement;  
  document.querySelector('#fizzbuzz')!.textContent = '';

  const fizzbuzzConf: {
    [key: number]: string;
  } = {};

  for (let i = 0; i < numList.children.length; i++) {
    let item = numList.children.item(i)!;
    for (let j = 0; j < item.children.length; j++) {
      let subItem = (item.children.item(j) as HTMLInputElement);
      if (validator.isNumeric(subItem.value)) {
        fizzbuzzConf[parseInt(subItem.value)] = (item.children.item(j + 1) as HTMLInputElement).value;
      }
    }
  }

  const fizzBuzzList = Array<HTMLLIElement>();
  for (let i = 1; i <= 100; i++) {
    let str = '';

    Object.keys(fizzbuzzConf).forEach(key => {
      if (i % parseInt(key) === 0) { str = str + fizzbuzzConf[parseInt(key)] }
    });

    const el = document.createElement('li');
    el.textContent = str ? str : i.toString();
    el.classList.add('list-group-item');

    if (str) { el.classList.add('active') }

    fizzBuzzList.push(el);
  }

  fizzBuzzList.forEach(el => {
    document.querySelector('#fizzbuzz')!.appendChild(el);
  });
});
