import './style.scss'

const buttonActions = () => {
  const button = document.querySelector('button');
  if (button === null) return;
  button?.addEventListener('click', () => {
    alert('js click');
  });
  
  button.style.backgroundColor = '#f00';
}


buttonActions();