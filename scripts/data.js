// Массив для хранения заметок
let notes = [];

// Функции для работы с данными
const NotesAPI = {
  // Получить все заметки
  getAllNotes() {
    return notes;
  },

  // Добавить новую заметку
  addNote(title, text) {
    const note = {//создаем объект заметки
      id: Date.now(),
      title,
      text,
      pinned: false,
      liked: false,
      createdAt: new Date()
    };
    notes.push(note);
    return note;
  },

  // Удалить заметку
  deleteNote(noteId) {
    notes = notes.filter(note => note.id !== noteId);
  },

  // Обновить состояние закрепа 
  togglePin(noteId) {
    const note = notes.find(note => note.id === noteId);//находим заметку по id
    if (note) {
      note.pinned = !note.pinned;
    }
  },

  // Обновить состояние лайка
  toggleLike(noteId) { 
    const note = notes.find(note => note.id === noteId);
    if (note) {
      note.liked = !note.liked;
    }
  },

  // Очистить все заметки
  clearAllNotes() {
    notes = [];
  }
};
