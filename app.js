<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Внутренний кабинет клиники</title>
  <link rel="stylesheet" href="/public/css/styles.css" />
</head>
<body class="app-body">
  <div class="app-shell">
    <header class="topbar">
      <div>
        <div class="brand-badge">Внутренний кабинет</div>
        <h1>Учет клиентов стоматологической клиники</h1>
        <p class="muted">Интерфейс для администратора и врача</p>
      </div>

      <div class="topbar-user">
        <div class="user-chip" id="currentUser">Пользователь: —</div>
        <form action="/auth/logout" method="POST" id="logoutForm">
          <button type="submit" class="secondary-btn">Выйти из системы</button>
        </form>
      </div>
    </header>

    <section class="toolbar card">
      <div class="toolbar-left">
        <button class="primary-btn" id="addClientBtn">Добавить клиента</button>
      </div>

      <div class="toolbar-right">
        <input id="searchInput" type="search" placeholder="Поиск по клиентам..." />
        <select id="sortSelect">
          <option value="name">Сортировка: по имени</option>
          <option value="lastVisit">Сортировка: по дате визита</option>
          <option value="phone">Сортировка: по номеру телефона</option>
        </select>
      </div>
    </section>

    <section class="card table-card">
      <div class="table-wrapper">
        <table class="clients-table">
          <thead>
            <tr>
              <th>ФИО</th>
              <th>Телефон</th>
              <th>Дата рождения</th>
              <th>Последний визит</th>
              <th>Жалобы</th>
              <th>Лечение</th>
              <th>Заметки врача</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody id="clientsTbody">
            <tr><td colspan="8" class="empty-state">Загрузка данных...</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>

  <!-- Модальное окно добавления / редактирования -->
  <div class="modal hidden" id="clientModal">
    <div class="modal-backdrop" data-close="modal"></div>
    <div class="modal-content modal-large">
      <div class="modal-header">
        <h2 id="modalTitle">Добавить клиента</h2>
        <button class="icon-btn" type="button" data-close="modal">✕</button>
      </div>

      <form id="clientForm" class="modal-form">
        <input type="hidden" id="clientId" />

        <div class="form-grid">
          <label>
            ФИО *
            <input type="text" id="fullName" required />
          </label>

          <label>
            Номер телефона *
            <input type="text" id="phone" required placeholder="+7 (___) ___-__-__" />
          </label>

          <label>
            Дата рождения
            <input type="date" id="birthday" />
          </label>

          <label>
            Дата последнего визита
            <input type="date" id="lastVisit" />
          </label>

          <label class="full-width">
            Жалобы
            <textarea id="complaints" rows="3"></textarea>
          </label>

          <label class="full-width">
            Проведенное лечение
            <textarea id="treatment" rows="3"></textarea>
          </label>

          <label class="full-width">
            Заметки врача
            <textarea id="notes" rows="3"></textarea>
          </label>
        </div>

        <div class="modal-actions">
          <button type="button" class="secondary-btn" data-close="modal">Отмена</button>
          <button type="submit" class="primary-btn" id="saveClientBtn">Сохранить</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Модальное окно просмотра карточки -->
  <div class="modal hidden" id="detailsModal">
    <div class="modal-backdrop" data-close="details"></div>
    <div class="modal-content modal-large">
      <div class="modal-header">
        <h2>Карточка клиента</h2>
        <button class="icon-btn" type="button" data-close="details">✕</button>
      </div>

      <div class="details-grid" id="detailsContent"></div>

      <div class="modal-actions">
        <button type="button" class="secondary-btn" data-close="details">Закрыть</button>
      </div>
    </div>
  </div>

  <!-- Подтверждение удаления -->
  <div class="modal hidden" id="confirmModal">
    <div class="modal-backdrop" data-close="confirm"></div>
    <div class="modal-content modal-small">
      <div class="modal-header">
        <h2>Подтверждение удаления</h2>
        <button class="icon-btn" type="button" data-close="confirm">✕</button>
      </div>
      <p id="confirmText">Вы уверены, что хотите удалить клиента?</p>
      <div class="modal-actions">
        <button type="button" class="secondary-btn" data-close="confirm">Отмена</button>
        <button type="button" class="danger-btn" id="confirmDeleteBtn">Удалить</button>
      </div>
    </div>
  </div>

  <!-- Уведомления -->
  <div id="toastContainer" class="toast-container"></div>

  <script src="/public/js/app.js"></script>
</body>
</html>
