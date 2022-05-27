const result = document.getElementById('result');
const regularInput = document.getElementById('input-regular');
const debouncedInput = document.getElementById('input-debounce');

result.style.fontSize = '30px';

regularInput.addEventListener('input', () => {
  result.innerHTML = regularInput.value;
});

function debounce(input, value, time) {
  const outputValue = value;
  setTimeout(() => {
    outputValue.innerHTML = input.value;
  }, time);
}

debouncedInput.addEventListener('input', () => {
  debounce(debouncedInput, result, 2000);
});
