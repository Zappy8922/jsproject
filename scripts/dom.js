// DOM элементы
const noteForm = document.getElementById('noteForm');
const noteTitleInput = document.getElementById('noteTitle');
const noteTextInput = document.getElementById('noteText');
const notesContainer = document.getElementById('notesContainer');
const clearAllBtn = document.getElementById('clearAllBtn');

// Счетчики символов
const titleCounter = noteTitleInput.nextElementSibling;
const textCounter = noteTextInput.nextElementSibling;

// Обновление счетчиков
function updateCharCounter(input, counter) {
  const current = input.value.length;//текущее количество символов
  const max = input.maxLength; //макс количество символов
  counter.textContent = `${current}/${max}`; //текущ кол-во символов и макс
}

// Отрисовка всех заметок
function renderNotes() {
  const notes = NotesAPI.getAllNotes();
  notesContainer.innerHTML = '';
  
  // Сначала отрисовываем закрепленные заметки
  const pinnedNotes = notes.filter(note => note.pinned);
  const unpinnedNotes = notes.filter(note => !note.pinned);
  
  [...pinnedNotes, ...unpinnedNotes].forEach(note => { //объединяем массивы закреп и не закреп заметок
    // Создаем карточку заметки и добавляем ее в контейнер
    const noteElement = createNoteCard(note, {
      onDelete: () => {
        NotesAPI.deleteNote(note.id);
        renderNotes();
      },
      onPin: () => {
        NotesAPI.togglePin(note.id);
        renderNotes();
      },
      onLike: () => {
        NotesAPI.toggleLike(note.id);
        renderNotes();
      }
    });
    notesContainer.appendChild(noteElement);
  });
}

