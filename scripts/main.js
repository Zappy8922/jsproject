function initApp() {
    // Обработчик формы
    noteForm.addEventListener('submit', (e) => {// Обраб события отправки формы
      // Отмена станд поведения формы
      e.preventDefault();
      
      const title = noteTitleInput.value.trim(); // trim удаление пробелов в нач и в конц
      const text = noteTextInput.value.trim();
      
      if (!title || !text) { // Проверка на пустые поля
        alert('Пожалуйста, заполните все поля');
        return;
      }
      
      NotesAPI.addNote(title, text);
      noteForm.reset();
      updateCharCounter(noteTitleInput, titleCounter); 
      updateCharCounter(noteTextInput, textCounter);
      renderNotes(); 
    });
    
    // Обработчики счетчиков символов
    noteTitleInput.addEventListener('input', () => {// Обработчик события ввода текста в поле заголовка
      updateCharCounter(noteTitleInput, titleCounter);// делаем обнву счетчика символов 
    });
    
    noteTextInput.addEventListener('input', () => {
      updateCharCounter(noteTextInput, textCounter);
    });
    
    // Обработчик кнопки очистки
    clearAllBtn.addEventListener('click', () => { // Удаление всех заметок
      if (confirm('Вы уверены, что хотите удалить все заметки?')) {
        NotesAPI.clearAllNotes();
        renderNotes();
      }
    });
    
    // Начальная отрисовка
    renderNotes();
  }
  
  // Запуск приложения
  document.addEventListener('DOMContentLoaded', initApp);
  
