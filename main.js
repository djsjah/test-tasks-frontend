function main() {

  console.log('\n\nЗадания JQuery: \n');

  $('#rootID').addClass('rootClass'); // Выбрать элемент с атрибутом id="rootID" и добавить класс "rootClass"

  console.log(" Задание 2: ", $('#rootID > .someClassName')); // Выбрать все дочерние элементы с атрибутом class="someClassName" у элемента с атрибутом id="rootID" на первом уровне вложенности

  console.log(" Задание 3: ", $('#rootID .someClassName')); // Выбрать все дочерние элементы с атрибутом class="someClassName" у элемента с атрибутом id="rootID" на любом уровне вложенности

  console.log(" Задание 4: ", $('.someClassName[oid="newDoc"]')); // Выбрать элементы с атрибутом class="someClassName" и аттрибутом oid = "newDoc"

  $('#rootID .someClassName:last-child p').text('Последняя строка'); // Выбрать последний дочерний элемент с атрибутом class="someClassName" у элемента с атрибутом id="rootID" и заменить текст в параграфе (p) на "Последняя строка"
}

document.addEventListener('DOMContentLoaded', () => {
  main();
});
