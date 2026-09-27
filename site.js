(() => {
  const form = document.querySelector('#library-search');
  const input = document.querySelector('#study-query');
  const clear = document.querySelector('#search-clear');
  const count = document.querySelector('#search-count');
  const empty = document.querySelector('#no-results');
  const groups = [...document.querySelectorAll('.library-group')];
  const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');

  function filterResources() {
    const terms = normalize(input.value.trim()).split(/\s+/).filter(Boolean);
    let matches = 0;

    for (const group of groups) {
      let groupMatches = 0;
      const groupName = group.querySelector('h3')?.textContent || '';
      for (const resource of group.querySelectorAll('.resource')) {
        const searchable = normalize(`${groupName} ${resource.textContent} ${resource.dataset.keywords || ''}`);
        const visible = terms.every((term) => searchable.includes(term));
        resource.hidden = !visible;
        if (visible) groupMatches++;
      }
      group.hidden = groupMatches === 0;
      matches += groupMatches;
    }

    empty.hidden = matches !== 0;
    clear.hidden = terms.length === 0;
    count.textContent = terms.length
      ? `${matches} ${matches === 1 ? 'material encontrado' : 'materiais encontrados'}`
      : `${matches} materiais para explorar`;
  }

  form.addEventListener('submit', (event) => event.preventDefault());
  input.addEventListener('input', filterResources);
  clear.addEventListener('click', () => {
    input.value = '';
    filterResources();
    input.focus();
  });
  const initialQuery = new URLSearchParams(window.location.search).get('q');
  if (initialQuery) input.value = initialQuery;
  filterResources();
})();
