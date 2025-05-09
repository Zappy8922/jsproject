// Создание карточки заметки
function createNoteCard(note, handlers) {
  const { onDelete, onPin, onLike } = handlers;
  
  const card = document.createElement('div');
  card.className = `note-card ${note.pinned ? 'pinned' : ''} ${note.liked? 'liked' : ''}`;
  
  card.innerHTML = ` 
      <h3>${note.title}</h3>
      <p>${note.text}</p>
      <div class="actions">
          <button class="pin-btn ${note.pinned ? 'active' : ''}" title="Закрепить"> 
              📌
          </button>
          <button class="like-btn ${note.liked ? 'liked' : ''}" title="Нравится">
              ❤️
          </button>
          <button class="delete-btn" title="Удалить">
              🗑️
          </button>
      </div>
  `;

  // Добавляем обработчики событий
  card.querySelector('.pin-btn').addEventListener('click', onPin);
  card.querySelector('.like-btn').addEventListener('click', onLike);
  card.querySelector('.delete-btn').addEventListener('click', onDelete);

  return card;
}
